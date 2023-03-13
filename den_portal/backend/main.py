from flask import Flask , jsonify , request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route('/api/signup',methods=["POST"])
@cross_origin()
def signup():
    data = request.json
    print(data)

    return jsonify({"data" : 'This route allows CORS!'})

if __name__ == '__main__':
    app.run(debug=True,port="5050")
