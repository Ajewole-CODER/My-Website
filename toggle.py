from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)

# MySQL configuration
config = {
    'user': 'your_username',
    'password': 'your_password',
    'host': 'your_host',
    'database': 'your_database'
}

# Establish MySQL connection
cnx = mysql.connector.connect(**config)
cursor = cnx.cursor()

@app.route('/api/data', methods=['GET'])
def get_data():
    query = "SELECT * FROM your_table"
    cursor.execute(query)
    data = cursor.fetchall()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)