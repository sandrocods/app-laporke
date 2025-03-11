from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import get_jwt
from flask_jwt_extended import jwt_required
from flask import request, jsonify, Blueprint
from models import revokeJwtModel
from lib.logger import logger
from models import userModel
from lib.jwt import jwt


@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["qwc_identity"]
    return userModel.User.query.get(identity)


@jwt.user_identity_loader
def user_identity_lookup(user):
    return user.id


@jwt.token_in_blocklist_loader
def check_if_token_revoked(jwt_header, jwt_payload: dict) -> bool:
    jti = jwt_payload["jti"]
    token = revokeJwtModel.RevokeJwt.get_by_jti(jti)
    return token is not None


authController = Blueprint('authController', __name__)


@authController.route('/login', methods=['POST'])
def login():
    logger.info('Login route called')
    username = request.json.get('username', None)
    if not username or username == '':
        logger.error('Username is required')
        return jsonify(
            {
                'message': 'Username is required',
                'status': False
            }
        ), 400

    password = request.json.get('password', None)
    if not password or password == '':
        logger.error('Password is required')
        return jsonify(
            {
                'message': 'Password is required',
                'status': False
            }
        ), 400

    user = userModel.User.check_login(username, password)
    if not user:
        logger.error('Invalid username or password')
        return jsonify(
            {
                'message': 'Invalid username or password',
                'status': False
            }
        ), 401

    access_token = create_access_token(identity=user)
    logger.info('Success login user : {}'.format(user.username))
    return jsonify(
        {
            'message': 'Success login',
            'status': True,
            'access_token': access_token
        }
    ), 200


@authController.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    try:
        logger.info('Profile route called')
        current_user = get_jwt_identity()
        user = userModel.User.query.get(current_user)
        logger.success('Success get profile : {}'.format(user.username))
        return jsonify(
            {
                'message': 'Success get profile',
                'status': True,
                'data': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email,
                    'name': user.name,
                    'role': user.role,
                    'is_active': user.is_active,
                }
            }
        ), 200
    except Exception as e:
        logger.error('Failed get profile')
        return jsonify(
            {
                'message': 'Failed get profile',
                'error': str(e),
                'status': False
            }
        ), 500


@authController.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    try:
        logger.info('Logout route called')
        jti = get_jwt()['jti']
        revokeJwtModel.RevokeJwt(
            jti=jti,
        ).add()
        logger.success('Success logout user : {}'.format(jti))
        return jsonify(
            {
                'message': 'Success logout',
                'status': True
            }
        ), 200
    except Exception as e:
        logger.error('Failed logout')
        return jsonify(
            {
                'message': 'Failed logout',
                'error': str(e),
                'status': False
            }
        ), 500


@authController.route('/change-password', methods=['POST'])
@jwt_required()
def change_password():
    try:
        logger.info('Change password route called')
        current_user = get_jwt_identity()
        user = userModel.User.query.get(current_user)

        old_password = request.json.get('old_password', None)
        if not old_password or old_password == '':
            logger.error('Old password is required')
            return jsonify(
                {
                    'message': 'Old password is required',
                    'status': False
                }
            ), 400

        new_password = request.json.get('new_password', None)
        if not new_password or new_password == '':
            logger.error('New password is required')
            return jsonify(
                {
                    'message': 'New password is required',
                    'status': False
                }
            ), 400

        if not user or not userModel.User.check_login(user.username, old_password):
            logger.error('Invalid old password')
            return jsonify(
                {
                    'message': 'Invalid old password',
                    'status': False
                }
            ), 401

        userModel.User.update_password(user.id, new_password)
        logger.success('Success change password : {}'.format(user.username))
        return jsonify(
            {
                'message': 'Success change password',
                'status': True
            }
        ), 200
    except Exception as e:
        logger.error('Failed change password')
        return jsonify(
            {
                'message': 'Failed change password',
                'error': str(e),
                'status': False
            }
        ), 500
