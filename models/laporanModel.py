from lib.database import db
import datetime


class Laporan(db.Model):
    __tablename__ = 'laporans'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    unique_id = db.Column(db.String(50), nullable=True)

    name = db.Column(db.String(50), nullable=True)
    title = db.Column(db.String(50), nullable=True)
    location = db.Column(db.String(50), nullable=True)
    description = db.Column(db.Text, nullable=True)
    photo = db.Column(db.String(100), nullable=True)
    status = db.Column(db.String(50), nullable=True, default='pending')

    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    def __init__(self, name=None, title=None, location=None, description=None, photo=None, status=None, unique_id=None):
        self.name = name
        self.title = title
        self.location = location
        self.description = description
        self.photo = photo
        self.status = status
        self.unique_id = unique_id
        self.created_at = datetime.datetime.now()
        self.updated_at = datetime.datetime.now()

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'title': self.title,
            'location': self.location,
            'description': self.description,
            'photo': self.photo,
            'unique_id': self.unique_id,
            'status': self.status,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

    def add(self):
        db.session.add(self)
        db.session.commit()

    @staticmethod
    def get_by_id(id):
        return Laporan.query.filter_by(id=id).first()

    @staticmethod
    def get_all():
        return Laporan.query.order_by(Laporan.created_at.desc()).all()

    @staticmethod
    def get_by_unique_id(unique_id):
        return Laporan.query.filter_by(unique_id=unique_id).first()

    @staticmethod
    def update_status(id, status):
        laporan = Laporan.query.filter_by(id=id).first()
        laporan.status = status
        laporan.updated_at = datetime.datetime.now()
        db.session.commit()
        return laporan

    @staticmethod
    def delete(id):
        laporan = Laporan.query.filter_by(id=id).first()
        db.session.delete(laporan)
        db.session.commit()
        return laporan

    @staticmethod
    def update_photo(id, photo):
        laporan = Laporan.query.filter_by(id=id).first()
        laporan.photo = photo
        laporan.updated_at = datetime.datetime.now()
        db.session.commit()
        return laporan

    @staticmethod
    def get_chart_data():
        open_data = Laporan.query.filter_by(status='open').count()
        pending_data = Laporan.query.filter_by(status='pending').count()
        closed_data = Laporan.query.filter_by(status='closed').count()
        return {
            'open': open_data,
            'pending': pending_data,
            'closed': closed_data,
            'total': open_data + pending_data + closed_data
        }

    @staticmethod
    def get_all_paginate(page, per_page):
        return Laporan.query.paginate(
            page=page,
            per_page=per_page,
            error_out=False
        )
