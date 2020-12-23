const check_token = require('../check-token');
const CustomError = require('../custom-error');

validateToken = async function(req, res, next) {
  let token = req.headers.authorization;
  token = token.replace('Bearer ', '');
  const result = await check_token(token);
  if(result.statusCode == 200) {
    next();
  } else {
    next(new CustomError(result.statusCode, result.statusMessage));
  }
}

module.exports = validateToken;