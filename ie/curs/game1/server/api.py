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

@app.route("/api/v1/last-five-sessions/<user_id>", methods=["GET"])
def last_five_sessions(user_id):
    try:
        user_id = int(user_id)
        if user_id <= 0:
            response = {
                "message": "Invalid user id."
            } 
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*")
            return response, 400
        
        connection = sqlite3.connect("ie/curs/game1/data/shapeclicker.db")
        cursor = connection.cursor()

        query = f"""select id, score from sessions where user_id={user_id}"""

        data = cursor.execute(query)
        data = list(data)

        sorted_scores = []
        if len(data) > 5:
            for i in range(len(data)-1, len(data)-6, -1):
                current_score = [data[i][0], data[i][1]]
                sorted_scores.append(current_score)
        else:
            for i in range(len(data)-1, -1, -1):
                current_score = [data[i][0], data[i][1]]
                sorted_scores.append(current_score)

        response = {
            "data": {
                "last_five_sessions": sorted_scores
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

@app.route("/api/v1/save/<session_id>", methods=["PUT"])
def save(session_id):
    try:
        body = request.json 

        # Check data validity
        session_id = int(session_id)

        time = body.get("time")
        score = body.get("score")

        if time is None and time < 0:
            response = {
                "message": f"Invalid time value: {time}."
            }
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*")
            return response, 400
        
        if score is None:
            response = {
                "message": f"Invalid score value: {score}."
            }
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*")
            return response, 400
        
        # Update session data 
        # connect to db 
        connection = sqlite3.connect("ie/curs/game1/data/shapeclicker.db")

        # create a cursor
        cursor = connection.cursor()

        # create an update query 
        query = f"""
            UPDATE sessions
            SET 
                time={time},
                score={score}
            WHERE
                id={session_id}"""
        
        # execute query
        cursor.execute(query)
        connection.commit()

        # close db connection
        connection.close()

        return "", 204

    except Exception as error:
        # codul pt erori 
        response = {
            "message": f"Something went wrong. Cause: {error}."
        }
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 500

@app.route("/api/v1/play", methods=["POST"])
def play():
    try: 
        body = request.json

        # Validate request data
        if body.get("user_id") is None:
            response = {
                "message": "User id missing."
            } 
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*")
            return response, 400
        
        # Crete new session
        # connect to db 
        connection = sqlite3.connect("ie/curs/game1/data/shapeclicker.db")

        # create cursor 
        cursor = connection.cursor()

        # create query 
        query = f"""INSERT INTO sessions(user_id) VALUES({body["user_id"]})"""

        # execute query 
        cursor.execute(query)

        # save data in db 
        connection.commit()

        # Get session ID for latest session
        # create query
        query = f"""SELECT id FROM sessions WHERE user_id={body["user_id"]}"""

        # run query 
        sessions = cursor.execute(query)
        sessions = list(sessions)

        # get latest session ID
        session_id = sessions[-1]
        session_id = session_id[0]

        # Create response 
        response = {
            "data": {
                "session_id": session_id
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