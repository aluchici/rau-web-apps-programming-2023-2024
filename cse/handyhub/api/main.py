from flask import Flask, request, jsonify
from flask_cors import CORS

from repository import *

USER_TYPE_ID = 2
DELIVERY_ADDRESS_ID = 1
BILLING_ADDRESS_ID = 1

app = Flask("handyhubapi")
CORS(app, resources=r'/api/*')

@app.route("/api/healthcheck", methods=["GET", "POST"])
def healthcheck():
    return "<h1>Hello World</h1>"

@app.route("/api/version", methods=["GET"])
def version():
    api_version = {
        "version": "1.0.0"
    }
    return api_version

@app.route("/api/users", methods=["GET", "POST"])
def users():
    if request.method == "GET":
        # connect to the db 
        connection = connect()

        # get all users details 
        users_details = get_all_users(connection)

        # close db connection 
        connection.close()

        # build response 
        response = {
            "data": []
        }
        for user in users_details:
            current_user = {
                "first_name": user[0],
                "last_name": user[1],
                "email": user[2]
            }
            response["data"].append(current_user)

        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*") 
        return response 

    if request.method == "POST":
        # get the request body
        body = request.json
        first_name = body["first_name"]
        last_name = body["last_name"]
        email = body["email"]
        password = body["password"]
        retyped_password = body["retyped_password"]

        # validate the data
        # check that passwords match 
        if retyped_password != password:
            error_message = {
                "data": "Password mismatch. Please try again..."
            }
            response = jsonify(error_message)
            response.headers.add("Access-Control-Allow-Origin", "*") 
            return response

        # establish a connection to our DB
        connection = connect()

        # insert data from body into DB
        create_user(connection, [first_name, last_name, email, password, DELIVERY_ADDRESS_ID, BILLING_ADDRESS_ID, USER_TYPE_ID])
        
        # return user_id if saved OK else error
        user_id = get_user_id(connection, email)

        connection.close() 

        response = {
            "data": {
                "user_id": user_id
            }
        }
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*") 
        return response 

@app.route("/api/users/<user_id>", methods=["GET", "PUT", "DELETE"])
def user_by_id(user_id):
    if request.method == "GET":
        # connect to the database 
        connection = connect()

        # get user details
        user_details = get_user_details(connection, user_id)

        # close connection to db 
        connection.close()

        response = {
            "data": {
                "first_name": user_details[0],
                "last_name": user_details[1]
            }
        }

        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response 

    if request.method == "PUT":
        pass 

    if request.method == "DELETE":
        connection = connect()
        delete_user(connection, user_id)
        connection.close()
        response = {
            "data": "Success." 
        } 
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response 

if __name__ == "__main__":
    app.run(debug=True)
