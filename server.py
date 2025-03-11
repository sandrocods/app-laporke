from app import app
from waitress import serve
from lib.logger import logger


class RouteLoggerMiddleware:
    def __init__(self, app):
        self.app = app

    def __call__(self, environ, start_response):
        path = environ.get('PATH_INFO', '')
        method = environ.get('REQUEST_METHOD', '')
        ip = environ.get('REMOTE_ADDR', '')

        logger.info(f'{ip} {method} {path}')
        return self.app(environ, start_response)


if __name__ == '__main__':
    # Use the middleware-wrapped app
    logged_app = RouteLoggerMiddleware(app)
    serve(logged_app, host='0.0.0.0', port=5000, threads=30)
