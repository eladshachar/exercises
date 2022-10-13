import pymysql

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="grocery_store",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)

create_products_table = 'CREATE TABLE products( id INT PRIMARY KEY, name VARCHAR(255), category INT, inventory INT, FOREIGN KEY (category) REFERENCES category(id));'
create_category_table = 'CREATE TABLE category( id INT PRIMARY KEY, name VARCHAR(255), department INT);'

# try:
#     with connection.cursor() as cursor:
#         query = create_products_table
#         cursor.execute(query)
#         result = cursor.fetchall()
#         print(result)
# except:
#     print("Error")

# try:
#     with connection.cursor() as cursor:
#         query = create_category_table
#         cursor.execute(query)
#         result = cursor.fetchall()
#         print(result)
# except:
#     print("Error")

# try:
#     with connection.cursor() as cursor:
#         query = 'INSERT INTO category VALUES(1, \'fruits\', 8);'
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("Error")

# try:
#     with connection.cursor() as cursor:
#         query = 'INSERT INTO category VALUES(2, \'vegtables\', 8);'
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("Error")

# try:
#     with connection.cursor() as cursor:
#         query = 'SELECT * FROM products;'
#         cursor.execute(query)
#         result = cursor.fetchall()
#         print(result)
# except:
#     print("Error")

# try:
#     with connection.cursor() as cursor:
#         query = 'INSERT INTO products VALUES(1, \'cucumber\', 2, 30);'
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("Error")

# try:
#     with connection.cursor() as cursor:
#         query = 'INSERT INTO products VALUES(2, \'banana\', 1, 40);'
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("Error")

# exercise_2_query = 'SELECT p.name FROM products AS p, category AS c WHERE p.category = c.id AND c.name = \'vegtables\';'

# try:
#     with connection.cursor() as cursor:
#         query = exercise_2_query
#         cursor.execute(query)
#         result = cursor.fetchall()
#         print(result)
# except:
#     print("Error")

exercise_3_query = 'SELECT p.name FROM products AS p WHERE p.id = 1; '

try:
    with connection.cursor() as cursor:
        query = exercise_3_query
        cursor.execute(query)
        result = cursor.fetchall()
        print(result)
except:
    print("Error")