from datetime import datetime
import random
import json
import os

from flask import Flask, jsonify, render_template, request
from dotenv import load_dotenv
from flask_cors import CORS
from faker import Faker

# Import All Controllers
from controllers import (
    authController,
    laporanController,
)
from lib.database import db
from lib.jwt import jwt
from lib.logger import logger

# Import All Models
from models import (
    userModel,
    laporanModel,
)

load_dotenv()

# Import All Libraries

app = Flask(__name__, static_folder='static', template_folder='static')

# Database Configs
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
app.config['PERMANENT_SESSION_LIFETIME'] = 60 * 60 * 24 * 7
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
    'pool_recycle': 3600,
    'pool_timeout': 300,
    'pool_size': 30,
    'max_overflow': 50,
    'pool_pre_ping': True,
}
# JWT Configs
app.config['JWT_SECRET_KEY'] = 'super-secret'  # Change this!
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = 3600
app.config['JWT_IDENTITY_CLAIM'] = "qwc_identity"

db.init_app(app)
jwt.init_app(app)
CORS(
    app,
    resources={
        r"/*": {"origins": "*"}
    }
)


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/db/migrate')
def migrate():
    logger.info('Migrate route called')
    try:
        with app.app_context():
            db.drop_all()
            db.create_all()
            return {
                'status': True,
                'message': 'Migration success',
                'timestamp': datetime.now()
            }
    except Exception as e:
        return {
            'status': False,
            'message': str(e),
            'timestamp': datetime.now()
        }


@app.route('/db/seeder')
def seeder():
    logger.info('Seeder route called')
    type = request.args.get('type')
    if type != 'user' and type != 'laporan':
        return {
            'status': False,
            'message': 'Invalid type',
            'timestamp': datetime.now()
        }

    try:
        with app.app_context():

            if type == 'user':
                userModel.User(
                    username='admin',
                    password='admin',
                    name='Administrator',
                    email='admin@gmail.com',
                    role='admin',
                ).add()

            if type == 'laporan':

                for i in range(1, 30):
                    fake = Faker(
                        locale='id_ID'
                    )
                    laporanModel.Laporan(
                        status=random.choice(['open', 'closed', 'pending']),
                        name=fake.name(),
                        title='Laporan {}'.format(i),
                        description=fake.text(),
                        photo='photo1.jpg',
                        location='Banteran',
                        unique_id='x91js{}'.format(i)
                    ).add()

            return {
                'status': True,
                'message': 'Seeder success',
                'timestamp': datetime.now()
            }
    except Exception as e:
        return {
            'status': False,
            'message': str(e),
            'timestamp': datetime.now()
        }


@app.route('/docs', methods=['GET'])
def docs():
    logger.info('Docs route called')
    if request.args.get('key') != 'tplm-laporke':
        logger.error('Invalid Key')
        return jsonify(
            {
                'status': False,
                'message': 'Invalid Key',
                'timestamp': datetime.timestamp(datetime.now())
            }
        ), 401
    logger.success('Key Valid')
    return render_template('docs.html')


@app.route('/logs', methods=['GET'])
def logs():
    logger.info('Logs route called')
    if request.args.get('key') != 'tplm-laporke':
        logger.error('Invalid Key')
        return jsonify(
            {
                'status': False,
                'message': 'Invalid Key',
                'timestamp': datetime.timestamp(datetime.now())
            }
        ), 401
    logger.success('Key Valid')
    data_logs = []
    with open(os.getcwd() + '/logs/debug.log', 'r', encoding='utf-8') as f:
        for line in f:
            data_logs.append(
                json.loads(line)
            )
    return jsonify(
        {
            'status': True,
            'message': 'Logs fetched',
            'data': data_logs,
            'timestamp': datetime.timestamp(datetime.now())
        }
    )


app.register_blueprint(authController.authController, url_prefix='/auth')
app.register_blueprint(laporanController.laporanController, url_prefix='/laporan')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.errorhandler(405)
def not_found(e):
    return jsonify(
        {
            'status': False,
            'message': 'Method not allowed',
            'timestamp': datetime.timestamp(datetime.now())
        }
    ), 405


@app.errorhandler(500)
def not_found(e):
    return jsonify(
        {
            'status': False,
            'message': 'Internal server error',
            'timestamp': datetime.timestamp(datetime.now())
        }
    ), 500
