const status = {
  ok: 200,
  created: 201,
  accepted: 202,
  badRequest: 400,
  unauthorized: 401,
  paymentRequired: 402,
  forbidden: 403,
  notFound: 404,
  conflict: 409,
  unprocessableEntity: 422,
};

// const codeTranslator = {
//   404: 'not_found',
//   422: 'invalid_data',
// };

const errorMessages = {
  invalidEntries: 'Invalid entries. Try again.',
  emailIsRegistered: 'Email already registered',
  unfilledFields: 'All fields must be filled',
  invalidLogin: 'Incorrect username or password',
};

module.exports = { status, errorMessages };