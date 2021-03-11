const { searchUserByEmailDb } = require('../models/UserModel');
const { INVALID_ENTRIES, EMAIL_CONFLICT } = require('../errors/messagesErrors');

const BAD_REQUEST = 400;
const CONFLICT = 409;

const regexValiditEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const validateCreateUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (name === undefined || email === undefined || password === undefined || password === '') {
    return res.status(BAD_REQUEST).json({ message: INVALID_ENTRIES });
  }

  if (!regexValiditEmail.test(email)) {
    return res.status(BAD_REQUEST).send({ message: INVALID_ENTRIES });
  }

  const userByEmail = await searchUserByEmailDb(email);

  if (userByEmail && userByEmail.email === email) {
    return res.status(CONFLICT).json({ message: EMAIL_CONFLICT });
  }

  next();
};

module.exports = validateCreateUser;