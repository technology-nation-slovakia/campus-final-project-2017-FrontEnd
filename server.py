import os

from flask import Flask, render_template, jsonify
from react.conf import settings
from react.render import render_component



app = Flask(__name__)


settings.configure(
    RENDER=False,
    RENDER_URL='http://127.0.0.1:9009/render'
)


#fake data
colorData = {'id' : 2,
            'text' : 'from_server',
            'complete' : 'false',
            'colorCaffe' : '#cc291f',
            'colorGreen' : '#99cc33',
            'colorBrown' : '#cc291f',
            'colorTerrace' :  '#99cc33',
        }

@app.route('/')
def index():

    return render_template('index.html')

@app.route('/data')
def data():
    d = colorData
    return jsonify(d)


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
