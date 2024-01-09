from flask import Flask, request, jsonify 
from flask_cors import CORS

DB = []

app = Flask("todo")
CORS(app, resources=r'/api/*')

# GET ALL Tasks
# GET /api/v1/tasks

# CREATE Task
# POST /api/v1/tasks
@app.route("/api/v1/tasks", methods=["GET", "POST"])
def tasks():
    if request.method == "GET": 
        response = {
            "data": DB
        }
        response = jsonify(response) 
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 200
    
    if request.method == "POST": 
        body = request.json 

        # TODO: Replace lines 22 - 31 with the code required
        # to interact properly with a DB 
        max_id = -1
        for item in DB:
            if max_id < item["id"]:
                max_id = item["id"]
        max_id = max_id + 1

        body["id"] = max_id
        DB.append(body)

        response = {
            "task_id": max_id
        }          
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 200
    

# GET Task BY ID
# GET /api/v1/tasks/<id>

# UPDATE Task
# PUT /api/v1/tasks/<id>

# DELETE Task
# DELETE /api/v1/tasks/<id>
@app.route("/api/v1/tasks/<task_id>", methods=["GET", "PUT", "DELETE"])
def tasks_by_id(task_id):
    if request.method == "GET":
        task = None 
        for current_task in DB:
            if current_task["id"] == task_id:
                task = current_task
                break
        
        response = {
            "data": task
        }
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 200       

    if request.method == "PUT":
        for idx in range(len(DB)):
            if DB[idx]["id"] == task_id:
                for key in request.json.keys():
                    DB[idx][key] = request.json[key] 
                return "", 204
            
        response = {
                "error": "Task not found."
            }
        response = jsonify(response)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 404    

    if request.method == "DELETE":
        task = None 
        for current_task in DB:
            if current_task["id"] == task_id:
                task = current_task
                break
        if task is not None:
            DB.remove(task)
            return "", 204 
        else:
            response = {
                "error": "Task not found."
            }
            esponse = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*")
            return response, 404       


if __name__ == "__main__":
    app.run(debug=True, port=5001)