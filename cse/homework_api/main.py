from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd 

USERS_FILE = "cse/homework_api/data/users.csv"
PRODUCTS_FILE = "cse/homework_api/data/products.csv"


app = Flask("homework_api")
CORS(app, resources=r'/api/*')


@app.route("/api/user", methods=["GET", "POST"])
def user():
    if request.method == "GET":
        try:
            users = pd.read_csv(USERS_FILE)
            response = {
                "data": users.to_dict(orient='records'),
                "error": None
            }
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*") 
            return response, 200
        except Exception as e:
            response = {
                "data": None,
                "error": f"Failed to get users. Reason: {e}"
            } 
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*") 
            return response, 500   

    if request.method == "POST":
        try:
            user_data = request.json 
            try:
                users = pd.read_csv(USERS_FILE)
                users = users.append(user_data, ignore_index=True)
            except:
                user_data = {
                    k:[v] for k, v in user_data.items()
                }
                users = pd.DataFrame.from_dict(user_data)
            print(users)
            users.to_csv(USERS_FILE, index=False)
            response = {
                "data": {
                    "user_id": len(users)
                },
                "error": None
            }
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*") 
            return response, 200
        except Exception as e:
            response = {
                "data": None,
                "error": f"Failed to add a new user. Reason: {e}"
            } 
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*") 
            return response, 500   


@app.route("/api/user/<user_id>", methods=["GET", "PUT"])
def user_by_id(user_id):
    if request.method == "GET":
        try:
            users = pd.read_csv(USERS_FILE)
            users.index = range(len(users))
            desired_user = users.iloc[int(user_id)]
            response = {
                    "data": desired_user.to_dict(),
                    "error": None
                }
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*") 
            return response, 200
        except Exception as e:
            response = {
                "data": None,
                "error": f"Failed to get user {user_id}. Reason: {e}"
            } 
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*") 
            return response, 500   

    if request.method == "PUT":
        try:
            user_data = request.json
            users = pd.read_csv(USERS_FILE)
            users.index = range(len(users))
            desired_user = users.iloc[int(user_id)]
            
            for e in user_data.items():
                desired_user[e[0]] = e[1]
            
            users.iloc[int(user_id)] = desired_user
            
            users.to_csv(USERS_FILE, index=False)

            response = jsonify({})
            response.headers.add("Access-Control-Allow-Origin", "*") 
            return response, 204
        except Exception as e:
                response = {
                    "data": None,
                    "error": f"Failed to edit user {user_id}. Reason: {e}"
                } 
                response = jsonify(response)
                response.headers.add("Access-Control-Allow-Origin", "*") 
                return response, 500   
 

@app.route("/api/products", methods=["GET", "POST"])
def products():
    if request.method == "GET":
        try:
            products = pd.read_csv(PRODUCTS_FILE)
            response = {
                "data": products.to_dict(orient='records'),
                "error": None
            }
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*") 
            return response, 200
        except Exception as e:
            response = {
                "data": None,
                "error": f"Failed to get products. Reason: {e}"
            } 
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*") 
            return response, 500   

    if request.method == "POST":
        try:
            product_data = request.json 
            try:
                products = pd.read_csv(PRODUCTS_FILE)
                products = products.append(product_data, ignore_index=True)
            except:
                product_data = {
                    k:[v] for k, v in product_data.items()
                }
                products = pd.DataFrame.from_dict(product_data)
            
            products.to_csv(PRODUCTS_FILE, index=False)
            response = {
                "data": {
                    "product_id": len(products)
                },
                "error": None
            }
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*") 
            return response, 200
        except Exception as e:
            response = {
                "data": None,
                "error": f"Failed to add a new product. Reason: {e}"
            } 
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*") 
            return response, 500   

@app.route("/api/products/<product_id>", methods=["GET", "PUT"])
def product_by_id(product_id): 
    if request.method == "GET":
        try:
            products = pd.read_csv(PRODUCTS_FILE)
            products.index = range(len(products))
            desired_product = products.iloc[int(product_id)]
            response = {
                    "data": desired_product.to_dict(),
                    "error": None
                }
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*") 
            return response, 200
        except Exception as e:
            response = {
                "data": None,
                "error": f"Failed to get product {product_id}. Reason: {e}"
            } 
            response = jsonify(response)
            response.headers.add("Access-Control-Allow-Origin", "*") 
            return response, 500   

    if request.method == "PUT":
        try:
            product_data = request.json
            products = pd.read_csv(PRODUCTS_FILE)
            products.index = range(len(products))
            desired_product = products.iloc[int(product_id)]
            
            for e in product_data.items():
                desired_product[e[0]] = e[1]
            
            products.iloc[int(product_id)] = desired_product
            
            products.to_csv(PRODUCTS_FILE, index=False)

            response = jsonify({})
            response.headers.add("Access-Control-Allow-Origin", "*") 
            return response, 204
        except Exception as e:
                response = {
                    "data": None,
                    "error": f"Failed to edit product {product_id}. Reason: {e}"
                } 
                response = jsonify(response)
                response.headers.add("Access-Control-Allow-Origin", "*") 
                return response, 500   


if __name__ == "__main__":
    app.run(debug=True, port=5000)