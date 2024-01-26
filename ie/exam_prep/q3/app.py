from flask import Flask, request, jsonify, render_template_string

app = Flask(__name__)

tasks = []

@app.route("/")
def index():
    return render_template_string(open("ie/exam_prep/q3/templates/index.html").read())

@app.route("/add_task", methods=["POST"])
def add_task():
    try:
        task_content = request.json.get("content")
        if task_content:
            tasks.append(task_content)
            response = {
                "message": "Task added"
            }
            response = jsonify(response)
            return response, 200
        response = {
            "message": "Empty task"
        }
        response = jsonify(response)
        return response, 400
    except Exception as e:
        response = {
            "message": f"Failed to add task. Cause: {e}"
        }
        response = jsonify(response)
        return response, 500
    
@app.route("/get_tasks", methods=["GET"])
def get_tasks():
    try:
        return jsonify(tasks), 200
    except Exception as e:
        response = {
            "message": f"Failed to get tasks. Cause: {e}"
        }
        response = jsonify(response)
        return response, 500

if __name__ == "__main__":
    app.run(debug=True, port=5001)