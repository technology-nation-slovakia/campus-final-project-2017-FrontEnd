import os

from flask import Flask, render_template
from react.conf import settings
from react.render import render_component


app = Flask(__name__)


settings.configure(
    RENDER=False,
    RENDER_URL='http://127.0.0.1:9009/render'
)


@app.route('/')
def index():

    return render_template('index.html')


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
