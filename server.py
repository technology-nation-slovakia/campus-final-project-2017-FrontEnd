import os

from flask import Flask, render_template
from react.conf import settings
from react.render import render_component


app = Flask(__name__)


settings.configure(
    RENDER=False,
    RENDER_URL='http://127.0.0.1:9009/render'
)

#TODOS = [
#    'Buy groceries',
#    'Mow the lawn',
#    'Take out the trash',
#]


@app.route('/')
def index():

    #set the colors of rooms [kafe, green, brown, terrace]
    colors = ['#99cc33', '#cc291f', '#cc291f', '#99cc33']

    component = render_component(
        os.path.join(os.getcwd(), 'static/js/components', 'Map.jsx'),
        #props={'todos': TODOS},
        props={'colors': colors},
        to_static_markup=False
    )

    return render_template('index.html', component=component)


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
