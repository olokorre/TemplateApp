from flask import Flask

app = Flask(__name__)

from .routes import main_routes, users_routes