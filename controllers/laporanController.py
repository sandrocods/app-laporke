from flask import request, jsonify, Blueprint
from flask_jwt_extended import jwt_required
from werkzeug.utils import secure_filename
from models import laporanModel
from lib.logger import logger
import shutil
import random
import string
import os


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ['png', 'jpg', 'jpeg']


def generate_unique_id():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=10))


laporanController = Blueprint('laporanController', __name__)


@laporanController.route('/get-all', methods=['GET'])
def get_all_laporan():
    try:
        logger.info('Get all laporan route called')
        data_all_laporan = []
        for data in laporanModel.Laporan.get_all():
            if not os.path.exists(os.getcwd() + '/static/uploads/' + data.photo):
                data.photo = 'error-img.jpeg'

            data_all_laporan.append(
                data.serialize()
            )
        logger.success('Success get all laporan')
        return jsonify(
            {
                'status': True,
                'message': 'Success get all laporan',
                'data': data_all_laporan
            }
        ), 200
    except Exception as e:
        logger.error(str(e))
        return jsonify(
            {
                'status': False,
                'message': str(e)
            }
        ), 400


@laporanController.route('/get-paginate', methods=['GET'])
def get_all_laporan_paginate():
    try:
        logger.info('Get all laporan paginate route called')
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 5, type=int)

        data_all_laporan = []
        data_laporan = laporanModel.Laporan.get_all_paginate(page, per_page)
        for data in data_laporan.items:
            data_all_laporan.append(
                data.serialize()
            )
        logger.success('Success get all laporan paginate | page : {} | per_page : {}'.format(page, per_page))
        return jsonify(
            {
                'status': True,
                'message': 'Success get all laporan paginate',
                'data': data_all_laporan,
                'page': page,
                'per_page': per_page,
                'has_next': data_laporan.has_next,
                'has_prev': data_laporan.has_prev,
                'next_num': data_laporan.next_num,
                'prev_num': data_laporan.prev_num,
            }
        ), 200
    except Exception as e:
        logger.error(str(e))
        return jsonify(
            {
                'status': False,
                'message': str(e)
            }
        ), 400


@laporanController.route('/get-by-id', methods=['GET'])
def get_laporan_by_id():
    try:
        logger.info('Get laporan by id route called')
        id = request.args.get('id')
        if not id or id == '':
            logger.error('Id is required')
            return jsonify(
                {
                    'status': False,
                    'message': 'Id is required'
                }
            ), 400

        data = laporanModel.Laporan.get_by_id(id)
        if not data:
            logger.error('Data : {} not found'.format(id))
            return jsonify(
                {
                    'status': False,
                    'message': 'Data not found'
                }
            ), 404
        logger.success('Success get laporan by id : {}'.format(id))
        return jsonify(
            {
                'status': True,
                'message': 'Success get laporan by id',
                'data': data.serialize()
            }
        ), 200
    except Exception as e:
        return jsonify(
            {
                'status': False,
                'message': str(e)
            }
        ), 400


@laporanController.route('/get-by-unique-id', methods=['GET'])
def get_laporan_by_unique_id():
    try:
        logger.info('Get laporan by unique id route called')
        unique_id = request.args.get('unique_id')
        if not unique_id or unique_id == '':
            logger.error('Unique Id is required')
            return jsonify(
                {
                    'status': False,
                    'message': 'Unique Id is required'
                }
            ), 400

        data = laporanModel.Laporan.get_by_unique_id(unique_id)
        if not data:
            logger.error('Data : {} not found'.format(unique_id))
            return jsonify(
                {
                    'status': False,
                    'message': 'Data not found'
                }
            ), 404
        logger.success('Success get laporan by unique id : {}'.format(unique_id))
        return jsonify(
            {
                'status': True,
                'message': 'Success get laporan by unique id',
                'data': data.serialize()
            }
        ), 200
    except Exception as e:
        return jsonify(
            {
                'status': False,
                'message': str(e)
            }
        ), 400


@laporanController.route('/create', methods=['POST'])
def create_laporan():
    try:
        logger.info('Create laporan route called')
        name = request.json.get('name', None)
        if not name or name == '':
            logger.error('Name is required')
            return jsonify(
                {
                    'status': False,
                    'message': 'Name is required'
                }
            ), 400

        title = request.json.get('title', None)
        if not title or title == '':
            logger.error('Title is required')
            return jsonify(
                {
                    'status': False,
                    'message': 'Title is required'
                }
            ), 400

        description = request.json.get('description', None)
        if not description or description == '':
            logger.error('Description is required')
            return jsonify(
                {
                    'status': False,
                    'message': 'Description is required'
                }
            ), 400

        photo = request.json.get('photo', None)
        if not photo or photo == '':
            logger.error('Photo is required')
            return jsonify(
                {
                    'status': False,
                    'message': 'Photo is required'
                }
            ), 400

        location = request.json.get('location', None)
        if not location or location == '':
            logger.error('Location is required')
            return jsonify(
                {
                    'status': False,
                    'message': 'Location is required'
                }
            ), 400

        unique_id = generate_unique_id()
        if not unique_id or unique_id == '':
            return jsonify(
                {
                    'status': False,
                    'message': 'Unique Id is required'
                }
            ), 400

        create_data_laporan = laporanModel.Laporan(
            name=name,
            title=title,
            description=description,
            photo=photo,
            location=location,
            unique_id=unique_id
        )
        create_data_laporan.add()

        logger.success('Success create laporan with unique id : {} | id : {}'.format(unique_id, create_data_laporan.id))

        return jsonify(
            {
                'status': True,
                'message': 'Success create laporan',
                'unique_id': unique_id,
                'id': create_data_laporan.id
            }
        ), 200
    except Exception as e:
        logger.error(str(e))
        return jsonify(
            {
                'status': False,
                'message': str(e)
            }
        ), 400


@laporanController.route('/update-status', methods=['PUT'])
@jwt_required()
def update_status_laporan():
    try:
        logger.info('Update status laporan route called')
        id = request.json.get('id', None)
        if not id or id == '':
            logger.error('Id is required')
            return jsonify(
                {
                    'status': False,
                    'message': 'Id is required'
                }
            ), 400

        status = request.json.get('status', None)
        if not status or status == '':
            logger.error('Status is required')
            return jsonify(
                {
                    'status': False,
                    'message': 'Status is required'
                }
            ), 400

        if status not in ['open', 'closed', 'pending']:
            logger.error('Status is invalid')
            return jsonify(
                {
                    'status': False,
                    'message': 'Status is invalid'
                }
            ), 400

        data = laporanModel.Laporan.get_by_id(id)
        if not data:
            logger.error('Data : {} not found'.format(id))
            return jsonify(
                {
                    'status': False,
                    'message': 'Data not found'
                }
            ), 404

        laporanModel.Laporan.update_status(id, status)
        logger.success('Success update status laporan id : {} to {}'.format(id, status))
        return jsonify(
            {
                'status': True,
                'message': 'Success update status laporan'
            }
        ), 200
    except Exception as e:
        logger.error(str(e))
        return jsonify(
            {
                'status': False,
                'message': str(e)
            }
        ), 400


@laporanController.route('/delete', methods=['DELETE'])
@jwt_required()
def delete_laporan():
    try:
        logger.info('Delete laporan route called')
        id = request.json.get('id', None)
        if not id or id == '':
            logger.error('Id is required')
            return jsonify(
                {
                    'status': False,
                    'message': 'Id is required'
                }
            ), 400

        data = laporanModel.Laporan.get_by_id(id)
        if not data:
            logger.error('Data : {} not found'.format(id))
            return jsonify(
                {
                    'status': False,
                    'message': 'Data not found'
                }
            ), 404

        laporanModel.Laporan.delete(id)
        logger.success('Success delete laporan id : {}'.format(id))
        return jsonify(
            {
                'status': True,
                'message': 'Success delete laporan'
            }
        ), 200
    except Exception as e:
        logger.error(str(e))
        return jsonify(
            {
                'status': False,
                'message': str(e)
            }
        ), 400


@laporanController.route('/upload-photo', methods=['POST'])
def upload_photo():
    try:
        logger.info('Upload photo route called')
        id = request.args.get('id')
        if not id or id == '':
            logger.error('Id is required')
            return jsonify(
                {
                    'status': False,
                    'message': 'Id is required'
                }
            ), 400

        data = laporanModel.Laporan.get_by_id(id)
        if not data:
            logger.error('Data : {} not found'.format(id))
            return jsonify(
                {
                    'status': False,
                    'message': 'Data not found'
                }
            ), 404

        if 'file' not in request.files:
            logger.error('File is required')
            return jsonify(
                {
                    'status': False,
                    'message': 'File is required'
                }
            ), 400

        file = request.files['file']
        if file.filename == '':
            logger.error('File is required')
            return jsonify(
                {
                    'status': False,
                    'message': 'File is required'
                }
            ), 400

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.getcwd() + '/static/uploads/' + filename)
            fix_filename = 'photo-id-' + str(id) + '-' + generate_unique_id() + '.' + filename.split('.')[-1]
            shutil.move(
                os.getcwd() + '/static/uploads/' + filename,
                os.getcwd() + '/static/uploads/' + fix_filename
            )
            laporanModel.Laporan.update_photo(id, fix_filename)
            logger.success('Success upload photo id : {} with filename : {}'.format(id, fix_filename))
            return jsonify(
                {
                    'status': True,
                    'message': 'Success upload photo',
                    'path': '/static/uploads/' + fix_filename
                }
            ), 200
        else:
            logger.error('File is not allowed')
            return jsonify(
                {
                    'status': False,
                    'message': 'File is not allowed'
                }
            ), 400
    except Exception as e:
        logger.error(str(e))
        return jsonify(
            {
                'status': False,
                'message': str(e)
            }
        ), 400


@laporanController.route('/get-chart', methods=['GET'])
def get_chart():
    try:
        logger.info('Get chart route called')
        data_chart = laporanModel.Laporan.get_chart_data()
        logger.success('Success get chart')
        return jsonify(
            {
                'status': True,
                'message': 'Success get chart',
                'data': data_chart
            }
        ), 200
    except Exception as e:
        logger.error(str(e))
        return jsonify(
            {
                'status': False,
                'message': str(e)
            }
        ), 400
