import os, json

from flask import Flask, render_template, jsonify, json
from react.conf import settings
from react.render import render_component



app = Flask(__name__)


settings.configure(
    RENDER=False,
    RENDER_URL='http://127.0.0.1:9009/render'
)


#fake data
colorData1 = { "user_id": 1,
                "description": "some description",
                "end_date": "2017-11-28 16:00:00",
                "place_id": 1, "itemtype_id": 1,
                "start_date": "2017-11-28 13:00:00",
                "isPrivate": 0,
                "id": 304,
                "name": "Event #blaa 2017-11-28"}


colorData11 = {}


colorData2 = {
            'colorTerrace' :  '#cc291f',
        }

colorData3 = {
            'colorGreen' : '#cc291f',
        }

colorData4 = {
            'colorBrown' : '#cc291f',
        }

@app.route('/')
def index():

    return render_template('index.html')

@app.route('/data1')
def data1():
    d = colorData1
    d1 = colorData11
    a = [d,d1]
    return json.dumps(a)

@app.route('/data2')
def data2():
    d = colorData2
    return jsonify(d)

@app.route('/data3')
def data3():
    d = colorData3
    return jsonify(d)

@app.route('/data4')
def data4():
    d = colorData4
    return jsonify(d)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
