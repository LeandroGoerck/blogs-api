const DISPLAY_NAME_LENGTH_MUST_BE_AT_LEAST_8 = {
  message: '"displayName" length must be at least 8 characters long',
  status: 400,
};

const EMAIL_MUST_BE_VALID = {
  message: '"email" must be a valid email',
  status: 400,
};

const EMAIL_IS_REQUIRED = {
  message: '"email" is required',
  status: 400,
};

const EMAIL_IS_NOT_ALLOWED_TO_BE_EMPTY = {
  message: '"email" is not allowed to be empty',
  status: 400,
};

const PASSWORD_IS_REQUIRED = {
  message: '"password" is required',
  status: 400,
};

const PASSWORD_IS_NOT_ALLOWED_TO_BE_EMPTY = {
  message: '"password" is not allowed to be empty',
  status: 400,
};

const PASSWORD_LENGTH_MUST_BE_6_CHARACTERS_LONG = {
  message: '"password" length must be 6 characters long',
  status: 400,
};

const USER_ALREADY_REGISTERED = {
  message: 'User already registered',
  status: 409,
};

const INVALID_FIELDS = {
  message: 'Invalid fields',
  status: 400,
};

const TOKEN_NOT_FOUND = {
  message: 'Token not found',
  status: 401,
};

const EXPIRED_OR_INVALID_TOKEN = {
  message: 'Expired or invalid token',
  status: 401,
};

module.exports = {
  DISPLAY_NAME_LENGTH_MUST_BE_AT_LEAST_8,
  EMAIL_MUST_BE_VALID,
  EMAIL_IS_REQUIRED,
  EMAIL_IS_NOT_ALLOWED_TO_BE_EMPTY,
  PASSWORD_IS_REQUIRED,
  PASSWORD_LENGTH_MUST_BE_6_CHARACTERS_LONG,
  PASSWORD_IS_NOT_ALLOWED_TO_BE_EMPTY,
  USER_ALREADY_REGISTERED,
  INVALID_FIELDS,
  TOKEN_NOT_FOUND,
  EXPIRED_OR_INVALID_TOKEN,
};