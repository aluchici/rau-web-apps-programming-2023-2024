from flask import Flask, request, jsonify, render_template_string

app = Flask(__name__)

feedbacks = [] 

@app.route('/')
def index():
    return render_template_string(open("ie/exam_prep/q1/templates/index.html").read())

@app.route('/submit_feedback', methods=["POST"])
def submit_feedback():
    try: 
        feedback = request.json 
        feedbacks.append(feedback)

        response = {
            "message": "Feedback received!"
        }
        response = jsonify(response)
        return response, 200
    except Exception as e:
        response = {
            "message": f"Something went wrong. Cause: {e}"
        }
        response = jsonify(response)
        return response, 500

if __name__ == "__main__": 
    app.run(debug=True, port=5001)