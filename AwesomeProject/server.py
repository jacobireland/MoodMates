from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/get_data', methods=['GET'])
def get_data():
    diaryEntry = "Hello! I'm a full stack developer that loves python and javascript."

    return diaryEntry

if __name__ == '__main__':
    app.run(debug=True)
