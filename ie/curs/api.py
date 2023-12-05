from flask import Flask, request, jsonify
import sqlite3

DB_PATH = "ie/curs/game.db"
app = Flask("api")

@app.route("/", methods=["GET"])
def home():
    return "<h1>Welcome to my page</h1>"

@app.route("/healthcheck", methods=["GET"])
def healthcheck():
    return "", 200

@app.route("/user/<user_id>", methods=["GET"])
def get_user(user_id):
    # 1. connect to database 
    connection = sqlite3.connect(DB_PATH)
    cursor = connection.cursor()

    # 2. extraga din baza de date informatiile cerute (detaliile unui user cu un anumit id)
    # 2.1. query SQLite 
    query = f"select id, first_name, last_name, email, password from users where id={user_id}"
    # 2.2. run query 
    data = list(cursor.execute(query))
    
    # 3. formateze datele in modul dorit de client (raspuns)
    response = {
        "user_id": data[0][0],
        "first_name": data[0][1],
        "last_name": data[0][2],
        "email": data[0][3],
        "password": data[0][4]
    }
    response = jsonify(response)

    # 4. close connection
    connection.close()
    
    # 5. returneze raspunsul 
    return response, 200

@app.route("/register", methods=["POST"])
def register():
    # 1. extragem datele trimise de catre client 
    body = request.json 

    # check if required props are given
    if body.get("email") is None:
        response = {
            "error": "Missing user email."
        }
        response = jsonify(response)
        return response, 400
    
    if body.get("password") is None:
        response = {
            "error": "Missing password."
        }
        response = jsonify(response)
        return response, 400
    
    # fill missing with default values
    if body.get("first_name") is None:
        body["first_name"] = "Missing FN"
    if body.get("last_name") is None:
        body["last_name"] = "Missing LN"

    # 2. connectam la baza de date 
    try: 
        connection = sqlite3.connect(DB_PATH)
        cursor = connection.cursor()

        # 3. inseram datele in baza de date 
        # 3.1. query 
        query = f"""INSERT INTO 
            users(first_name, last_name, email, password) 
            VALUES('{body['first_name']}', '{body['last_name']}', '{body['email']}', '{body['password']}')"""
        # 3.2. run query
        cursor.execute(query)
        connection.commit()
    except Exception as e:
        response = {
            "error": f"Something went wrong. Cause: {e}."
        }
        response = jsonify(response)
        return response, 500
    
    # 4. intoarcem un raspuns 
    return "", 200

if __name__ == "__main__":
    app.run(debug=True, port=8000)