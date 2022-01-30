/* eslint-disable no-console */
function logErrors(err, _req, _res, next) {
  console.log('logErrors')
  console.error(err);
  next(err);
}

function errorHandler(err, _req, res, _next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

function boomErrorHandler(err, _req, res, next) {
  console.log('boomErrorHandler');
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}


module.exports = { logErrors, errorHandler, boomErrorHandler };
