const validateToken = require('../auth/validateToken');
const returnedStatusAndMessage = require('../util/validations');

const status401 = 401;

const verifyAuthorization = (request, response, next) => {
  const { authorization: token } = request.headers;

  const payload = validateToken(token);

  if (!payload) {
    return returnedStatusAndMessage(response,
    status401,
    'jwt malformed');
  }

  request.user = payload;

  next();
};

module.exports = verifyAuthorization;