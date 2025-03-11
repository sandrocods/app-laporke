from loguru import logger

logger.add(
    "logs/debug.log",
    format="{time} {level} {message}",
    level="DEBUG",
    rotation="5 MB",
    compression="zip",
    serialize=True,
)
