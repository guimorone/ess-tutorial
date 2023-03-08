import logging

from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from dotenv import load_dotenv

from resources.restaurant import Restaurant


app = Flask(__name__)

# Cors
CORS(app)

# Api
api = Api(app, "/api")

log = logging.getLogger('werkzeug')

load_dotenv()

# url-backend/api/restaurant
api.add_resource(Restaurant, "/restaurant", methods=["GET", "POST"])
