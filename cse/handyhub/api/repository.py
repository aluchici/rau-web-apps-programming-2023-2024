import sqlite3 


connection = sqlite3.connect("../data/handyhub.db")
cursor = connection.cursor()

query = "select * from addresses"

data = cursor.execute(query)

print(data)
