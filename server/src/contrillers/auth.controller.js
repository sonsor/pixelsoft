const { authService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const google = catchAsync(async (req, res) => {
  const data = await authService.verifyGoogleToken(req.body.idToken);
  res.json(data);
});

module.exports = {
  google,
};
