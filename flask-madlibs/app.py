from flask import Flask, request, render_template
from stories import Story  

app = Flask(__name__)

@app.route('/home')
def load_homepage():
    return render_template("home.html")

@app.route('/story')
def load_story():
    place = request.args["place"]
    noun = request.args["noun"]
    verb = request.args["verb"]
    adjective = request.args["adjective"]
    plural_noun = request.args["plural_noun"]

    story_text = Story(["place", "noun", "verb", "adjective", "plural_noun"],
                       """Once upon a time in a long-ago {place}, there lived a large {adjective} {noun}. It loved to {verb} {plural_noun}."""
                        )
    answer = {"place": place, "noun": noun, "verb":verb , "adjective":adjective, "plural_noun":plural_noun}
    text = story_text.generate(answer)
    return render_template("story.html", text = text)