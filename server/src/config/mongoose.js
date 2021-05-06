const mongoose = {
  url: process.env.MONGODB_URL,
  options: {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

module.exports = mongoose;
