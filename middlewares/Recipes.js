const jwt = require('jsonwebtoken');

const secret = 'senha12345';

const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const SERVER_ERROR = 500;

const recipesValidation = async (req, res, next) => {
  const { name, ingredients, preparation } = req.body;
  try {
    if (!name || !ingredients || !preparation) {
      return res.status(BAD_REQUEST).json({ message: 'Invalid entries. Try again.' });
    }
  } catch (err) {
    return res.status(SERVER_ERROR).json({ err: 'Server Internal Error' });
  }
  next();
};

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
  const payload = jwt.verify(token, secret, {
    iss: 'Cookmaster', 
    aud: 'identity',
  });

  if (typeof payload === 'string') {
    throw new Error('jwt malformed');
  }
  } catch (err) {
  return res.status(UNAUTHORIZED).json({ message: err.message });
  }
  next();
};

module.exports = {
  recipesValidation,
  validateToken,
};