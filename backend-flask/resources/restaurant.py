from flask import request
from flask_restful import Resource


class Restaurant(Resource):
    def get(self):
        try:
            return {"data": []}, 200
        except:
            return {"data": []}, 500

    def post(self):
        pass
