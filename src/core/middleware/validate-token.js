const check_token = require('../check-token');
const CustomError = require('../custom-error');

validateToken = async function(req, res, next) {
  let token = req.headers.authorization;
  token = token.replace('Bearer ', '');
  check_token(token).then(
    result => {
      if(result.statusCode == 200) {
        next();
      } else {
        next(new CustomError(result.statusCode, result.statusMessage));
      }
    }
  ).catch(
    error => next(new CustomError(500, error))
  );
}

module.exports = validateToken;