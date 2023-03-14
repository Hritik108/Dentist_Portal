from flask import Flask , jsonify , request
from flask_cors import CORS, cross_origin
from user_database import DataBase

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

    db = DataBase()

    data = db.save_data(name,email,number,password)

    return jsonify({"data" : data})


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

        

if __name__ == '__main__':
    app.run(debug=True,port="5050")
