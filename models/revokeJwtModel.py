from lib.database import db
import datetime


class RevokeJwt(db.Model):
    __tablename__ = 'revoke_jwt'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    jti = db.Column(db.String(120), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now())

    def __init__(self, jti=None, created_at=None):
        self.jti = jti
        self.created_at = created_at

    def serialize(self):
        return {
            'id': self.id,
            'jti': self.jti,
            'created_at': self.created_at
        }

    def add(self):
        db.session.add(self)
        db.session.commit()

    @staticmethod
    def get_by_jti(jti):
        return RevokeJwt.query.filter_by(jti=jti).first()

    @staticmethod
    def is_jti_blacklisted(jti):
        return bool(RevokeJwt.query.filter_by(jti=jti).first())
