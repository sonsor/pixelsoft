const httpStatus = require('http-status');
const { OAuth2Client } = require('google-auth-library');
const userService = require('./user.service');
const tokenService = require('./token.service');
const ApiError = require('../utils/ApiError');
const config = require('../config');

const client = new OAuth2Client(config.auth.google.clientId);

const verifyGoogleToken = async (idToken) => {
  const response = await client.verifyIdToken({
    idToken,
    audience: config.auth.google.clientId,
  });

  /* eslint-disable */

  const {email_verified, name, email} = response.payload


  if (email_verified) {
     const data = await userService.findOrCreate({
      email,
      name
     }) 

     const token = tokenService.sign(data);

     return {
      token,
      user: data.doc
     }

  }
  /* eslint-enable */

  throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
};

module.exports = {
  verifyGoogleToken,
};
