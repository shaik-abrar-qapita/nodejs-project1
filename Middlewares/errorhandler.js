const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants.BAD_REQUEST:
      res.json({
        title: constants.BAD_REQUEST,
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.NOT_FOUND:
      res.json({
        title: constants.NOT_FOUND,
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: constants.FORBIDDEN,
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.UNAUTHORIZED:
      res.json({
        title: constants.UNAUTHORIZED,
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      res.json({
        title: constants.INTERNAL_SERVER_ERROR,
        message: err.message,
        stackTrace: err.stack,
      });
      break;
  }
};

module.exports = errorHandler;
