from flask import request
from flask_restful import Resource


class Restaurant(Resource):
    def get(self):
        try:
            print(request.args.get("testeee"))
            return {"data": [{"dale": "resposta"}]}, 200
        except:
            return {"data": []}, 500

    def post(self):
        pass
