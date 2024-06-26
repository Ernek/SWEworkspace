from flask import Flask, request, render_template, redirect 
from surveys import satisfaction_survey

app = Flask(__name__)

responses = []

@app.route('/')
def homepage():
    title = satisfaction_survey.title
    instructions = satisfaction_survey.instructions 
    return render_template("home.html", title = title, instructions = instructions)

@app.route('/question/<int:id>')
def question(id):
    if id < len(satisfaction_survey.questions):
        question_field = satisfaction_survey.questions[id]
        question = question_field.question
        choices = question_field.choices
        new_index = id + 1
        return render_template("base.html", question = question, choices = choices , current_index = id, new_index = new_index)
    else:
       return render_template("endpage.html")
     
@app.route("/question/<int:id>", methods=["POST"])
def add_response(id):
    """Add response to list of responses."""
    next_page_index = id + 1
    response = request.form["choice"]

    responses.append(response)
    print(responses)
    return redirect(f"{next_page_index}")