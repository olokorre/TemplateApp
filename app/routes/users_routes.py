from importlib_metadata import email
from app import app
from flask import render_template, request

@app.route('/users', methods=['GET', 'POST'])
def template():
    if request.method == 'GET': return render_template('create_user.html')
    else: return {
        'message': 'Funciona, ebaa!',
        'email': request.form['email']
    }