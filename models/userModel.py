from hmac import compare_digest
from lib.database import db
import datetime


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    role = db.Column(db.String(50), nullable=False, default='user')
    is_active = db.Column(db.Boolean, nullable=False, default=True)

    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    def __init__(self, username=None, email=None, name=None, password=None, role=None):
        self.username = username
        self.email = email
        self.name = name
        self.password = password
        self.role = role
        self.created_at = datetime.datetime.now()
        self.updated_at = datetime.datetime.now()

    def serialize(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'name': self.name,
            'password': self.password,
            'role': self.role,
            'is_active': self.is_active,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

    def add(self):
        db.session.add(self)
        db.session.commit()

    def get_by_username(self):
        return User.query.filter_by(username=self.username).first()

    @staticmethod
    def check_login(username, password):
        user = User.query.filter_by(username=username).first()
        if user and compare_digest(user.password, password):
            return user
        return False

    @staticmethod
    def get_by_id(id):
        return User.query.filter_by(id=id).first()

    @staticmethod
    def get_all():
        return User.query.all()

    @staticmethod
    def update_password(id, password):
        user = User.query.filter_by(id=id).first()
        user.password = password
        db.session.commit()
        return user
