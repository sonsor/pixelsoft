const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });


const auth = require('./auth');
const mongoose = require('./mongoose');
const common = require('./common');

module.exports = {
  auth,
  common,
  mongoose,
};
