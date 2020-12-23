const handleError = (err, req, res, next) => {
  const { statusCode, statusMessage } = err;
  res.status(statusCode);
  res.send(statusMessage);
  next();
};

module.exports = handleError;