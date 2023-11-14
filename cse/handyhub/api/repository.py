import sqlite3 


def connect():
    connection = sqlite3.connect("D:\\CSE-WebApps-2023-2024\\rau-web-apps-programming-2023-2024\\cse\\handyhub\\data\\handyhub.db")
    return connection

def create_user(connection, user_data):
    query = f"""INSERT INTO users(
        first_name, 
        last_name, 
        email, 
        password, 
        delivery_address_id, 
        billing_address_id, 
        user_type_id) 
        VALUES(
            '{user_data[0]}', 
            '{user_data[1]}', 
            '{user_data[2]}', 
            '{user_data[3]}', 
            {user_data[4]}, 
            {user_data[5]}, 
            {user_data[6]}
        )"""
    cursor = connection.cursor()
    cursor.execute(query)
    connection.commit()

def get_user_id(connection, user_email):
    query = f"""select id from users where email='{user_email}'"""
    cursor = connection.cursor()
    database_response = cursor.execute(query)
    user_id = list(database_response)
    return user_id

def get_user_details(connection, user_id):
    query = f"""select first_name, last_name from users where id={user_id}"""
    cursor = connection.cursor()
    database_response = cursor.execute(query)
    user_details = list(database_response)[0]
    return user_details

def get_all_users(connection):
    query = "select first_name, last_name, email from users where id != 1"
    cursor = connection.cursor()
    database_response = cursor.execute(query)
    users = list(database_response)
    return users 

def delete_user(connection, user_id):
    query = f"""delete from users where id={user_id}"""
    cursor = connection.cursor()
    cursor.execute(query)
    connection.commit()