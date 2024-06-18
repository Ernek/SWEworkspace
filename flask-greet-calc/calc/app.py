from flask import Flask, request 
from operations import add, sub, mult, div

app = Flask(__name__)

@app.route("/add")
def adding():
    a = float(request.args.get("a"))
    b = float(request.args.get("b"))
    return f"{add(a,b)}"

@app.route("/sub")
def substracting():
    a = float(request.args.get("a"))
    b = float(request.args.get("b"))
    return f"{sub(a,b)}"

@app.route("/mult")
def multiplying():
    a = float(request.args.get("a"))
    b = float(request.args.get("b"))
    return f"{mult(a,b)}"

@app.route("/div")
def dividing():
    a = float(request.args.get("a"))
    b = float(request.args.get("b"))
    return f"{div(a,b)}"