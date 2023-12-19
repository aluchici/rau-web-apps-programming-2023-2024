from flask import Flask, request, jsonify
from flask_cors import CORS

import sqlite3

app = Flask("shapeclicker_api")
CORS(app, resources=r'/api/*')

@app.route("/api/v1/register", methods=["POST"])
def register():
    body = request.json 

    try:
        # check data validity
        if body["password"] != body["retype_password"]:
            response = {
                "message": f"Password mismatch."
            }
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*")
            return response, 400
        
        # create new user 
        # open a new connection to db
        connection = sqlite3.connect("ie/curs/game1/data/shapeclicker.db")

        # define SQL query to run
        query = f"""INSERT INTO users(email, password) VALUES ('{body["email"]}', '{body["password"]}')"""

        # create a new cursor
        cursor = connection.cursor()

        # execute query
        cursor.execute(query)
        
        # permanently save data to db
        connection.commit()

        # get new user's id 
        # define SQL query to get user id
        query = f"""select id from users where email='{body["email"]}'"""

        # run query 
        user_id = list(cursor.execute(query))[0][0]

        # close connection to db
        connection.close()

        # create response
        response = {
            "data": {
                "user_id": user_id
            }
        }
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 200
    except Exception as e:
        # codul pt erori 
        response = {
            "message": f"Something went wrong. Cause: {e}."
        }
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 500

@app.route("/api/v1/authenticate", methods=["POST"])
def authenticate():
    body = request.json 

    try:
        # get existing new user 
        # open a new connection to db
        connection = sqlite3.connect("ie/curs/game1/data/shapeclicker.db")

        # define SQL query to run
        query = f"""select id, email, password from users where email='{body["email"]}'"""

        # create a new cursor
        cursor = connection.cursor()

        # execute query
        user_details = list(cursor.execute(query))[0]
        
        # check if user exists
        if len(user_details) > 0:
            # check if provided password matches existing password
            if body["password"] != user_details[2]:
                response = {
                    "message": f"Password mismatch."
                }
                response = jsonify(response)
                response.headers.add("Access-Control-Allow-Origin", "*")
                return response, 400
            
            user_id = user_details[0]   

            # close connection to db
            connection.close()

            # create response
            response = {
                "data": {
                    "user_id": user_id
                }
            }
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*")
            return response, 200
    except Exception as e:
        # codul pt erori 
        response = {
            "message": f"Something went wrong. Cause: {e}."
        }
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 500

@app.route("/api/v1/high-score/<user_id>", methods=["GET"])
def high_score(user_id):
    try:
        user_id = int(user_id)
        # connect to db 
        connection = sqlite3.connect("ie/curs/game1/data/shapeclicker.db") 

        # create cursor 
        cursor = connection.cursor()

        # define SQL query
        query = f"""select score from sessions where user_id={user_id}"""

        # run query 
        scores = list(cursor.execute(query))

        # close connection
        connection.close()

        # process scores to get highest value
        high_score = -1000000
        for element in scores:
            if high_score < element[0]:
                high_score = element[0]

        if high_score == -1000000:
            high_score = None

        # create a response and return it 
        response = {
            "data": {
                "highscore": high_score
            }
        }
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 200
    except Exception as e:
        # codul pt erori 
        response = {
            "message": f"Something went wrong. Cause: {e}."
        }
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 500

@app.route("/api/v1/total-time/<user_id>", methods=["GET"])
def total_time(user_id):
    try:
        connection = sqlite3.connect("ie/curs/game1/data/shapeclicker.db")
        cursor = connection.cursor()

        query = f"""select time from sessions where user_id={user_id}"""

        times = cursor.execute(query)
        times = list(times)

        total_time = 0
        for time in times:
            total_time = total_time + time[0]

        response = {
            "data": {
                "total_time": total_time
            }
        }
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 200
    except Exception as error:
         # codul pt erori 
        response = {
            "message": f"Something went wrong. Cause: {error}."
        }
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 500

if __name__ == "__main__":
    app.run(debug=True, port=5001)