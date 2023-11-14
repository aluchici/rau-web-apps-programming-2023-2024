# Create a new endpoint that gets all the users. 
# In your answer, you should build a route "api/v2/users" that accepts 
# a GET request and returns a JSON with the following structure:
# IF SUCCESS: 
# {
#   "data": [list of users details]
# }
# IF ERROR: 
# {
#   "message": "<Your error message>"
# }
# While building your API, please use the function get_all_users() to get 
# the data stored in the database. 

import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS 

# database interation
def get_all_users():
    query = "select * from users"
    connection = sqlite3.connect("api_example.db")
    cursor = connection.cursor()
    users_details = list(cursor.execute(query))
    response = []

    if len(users_details):
        for user in users_details:
            current_user = {
                "id": user[0],
                "first_name": user[1],
                "last_name": user[2],
                "email": user[3],
                "password": user[4]
            }
            response.append(current_user)
    
    return response

# api 
app = Flask("example-api")
CORS(app, resources=r'/api/*')
 
@app.route("/api/v2/users", methods=["GET"])
def get_users():
    # 1. get the data from the data store 
    # 2. build the API response 
    try:
        list_of_users = get_all_users()
        response = {
            "data": list_of_users
        }
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        status_code = 200    
    except Exception as e:
        response = {
            "message": f"Failed to get users. Cause {e}."
        }
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        status_code = 500

    # 3. return the response and the status code (200 if success, 500 if error)
    return response, status_code

# Q2. Fix this API to accept POST requests. 
# Q3. Fix this API to include error handling 
@app.route("/api/v2/products", methods=["GET", "POST"])
def get_users():
    if request.method == "GET":
        try:
            response = {
                "data": "Working"
            }
        except Exception as e:
            response = {
                "data": f"Error. {e}."
            }
            
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response 

    if request.method == "POST":
        try:
            response = {
                "data": "Added new product!"
            }
        except Exception as e:
            response = {
                "data": f"Error. {e}."
            }

        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response 

if __name__ == "__main__":
    app.run(debug=True)