const { User } = require('../models');

const findOrCreate = async (data) => {
  return User.findOrCreate({ email: data.email }, data);
};

module.exports = {
  findOrCreate,
};
