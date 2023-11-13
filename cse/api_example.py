import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS 

# database interation
def get_user_details_by_email(user_email):
    connection = sqlite3.connect("D:\\CSE-WebApps-2023-2024\\rau-web-apps-programming-2023-2024\\cse\\api_example.db")
    
    query = f"select id, email, password from users where email='{user_email}'"
    
    cursor = connection.cursor()
    user_details = list(cursor.execute(query))
    if len(user_details) != 0:
        user_details = user_details[0]
    connection.close()

    return user_details

def create_user(first_name, last_name, email, password):
    query = f"""INSERT INTO users(first_name, last_name, email, password)
    VALUES('{first_name}', '{last_name}', '{email}', '{password}')"""

    connection = sqlite3.connect("D:\\CSE-WebApps-2023-2024\\rau-web-apps-programming-2023-2024\\cse\\api_example.db")
    cursor = connection.cursor()
    cursor.execute(query)
    connection.commit()
    connection.close()

# api 
app = Flask("example-api")
CORS(app, resources=r'/api/*')

@app.route("/api/users", methods=["POST"])
def users():
    # get the request data
    body = request.json 

    # validation 
    # check that password and retyped password match
    if body["password"] != body["retyped_password"]:
        response = {
            "message": "Failed to sign up. Password mismatch."
        } 
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 400

    # create a new user in our db 
    create_user(body["first_name"], body["last_name"], body["email"], body["password"])
    
    # get user id and return to client
    user_details = get_user_details_by_email(body["email"])

    response = {
        "data": {
            "user_id": user_details[0]
        }
    }
    response = jsonify(response)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response, 200    

@app.route("/api/signin", methods=["POST"])
def signin():
    # get request body 
    body = request.json 

    # extract current user details (check if user exists)
    user_details = get_user_details_by_email(body["email"])

    if len(user_details) == 0:
        response = {
            "message": "Invalid user. User missing."
        }
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 400
    
    if body["password"] != user_details[2]:
        response = {
            "message": "Invalid data provided. Please try again..."
        }
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 400
    
    response = {
        "data": {
            "user_id": user_details[0]
        }
    }
    response = jsonify(response)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response, 200

if __name__ == "__main__":
    app.run(debug=True)