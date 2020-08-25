ResponseFormatter = function(req, res, next) {
  console.log(res.body);
  console.log('response formatter');
  next();
}

module.exports = ResponseFormatter;