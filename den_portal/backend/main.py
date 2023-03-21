from flask import Flask , jsonify , request
from flask_cors import CORS, cross_origin
from user_database import DataBase
from admin_database import AdminDataBase
from appointments import Appointments
import json 

from prescriptions import *

app = Flask(__name__)
CORS(app)


@app.route('/api/signup',methods=["POST"])
@cross_origin()
def signup():
    data = request.json
    name = data['name']
    email = data['email']
    number = data['number']
    password = data['password']
    address = data['address']
    gender = data['gender']

    db = DataBase()

    data = db.save_data(name,email,number,password,address,gender)
    # data = {"name":data[0],"email":data[1],"number":data[2],"password":data[3]}
    return jsonify({"data" : data})

@app.route('/api/admin_signup',methods=["POST"])
@cross_origin()
def admin_signup():
    data = request.form
    name = data['name']
    email = data['email']
    number = data['number']
    password = data['password']

    db = AdminDataBase()

    db.save_data_admin(name,email,number,password)

    return jsonify({"data" : data})

@app.route('/api/admin_login',methods=["POST"])
@cross_origin()
def admin_login():
    data = request.json
    
    ID = data['ID']
    password = data['password']
    db = AdminDataBase()
    
    data = db.fetch_admin_data(ID)

    if data:
        if data[3] == password:
            return jsonify({"data" : data})
        else:
            return jsonify({"data" : "WRONG PASSWORD"})
    else:
        return jsonify({"data" : "CUSTOMER ID NOT FOUND"})

@app.route('/api/login',methods=["POST"])
@cross_origin()
def login():
    data = request.json
    
    ID = data['ID']
    password = data['password']
    db = DataBase()
    
    data = db.fetch_data(ID)

    if data:
        if data[3] == password:
            return jsonify({"data" : data})
        else:
            return jsonify({"data" : "WRONG PASSWORD"})
    else:
        return jsonify({"data" : "CUSTOMER ID NOT FOUND"})

@app.route('/api/appointment',methods=["POST"])
@cross_origin()
def appointment():
    data = request.json
    appointment = Appointments()
    appointment.save_data(data)

    return jsonify({"data" : "CUSTOMER ID NOT FOUND"})

@app.route('/api/fetch_all_appointments')
@cross_origin()
def fetch_all_appointments():

    appointments = {}
    l = []
    appointment = Appointments()
    data = appointment.fetch_all_record()
    for i in data:
        appointments['customer_id'] = i[0]
        appointments['services'] = json.loads(i[1])
        l.append(appointments)
    
    return jsonify({"data" : l})

@app.route('/api/prescriptions',methods=["POST"])
@cross_origin()
def test():

    data  = request.json
    question = data['question']
    
    answer = make_prescriptions(question)

    return {"data":answer}

    
        

if __name__ == '__main__':
    app.run(debug=True,port="5050",host="0.0.0.0")
