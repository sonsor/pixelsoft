const auth = {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  token: {
    secret: process.env.JWT_SECRET,
  },
};

module.exports = auth;
