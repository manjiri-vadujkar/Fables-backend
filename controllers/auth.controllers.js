const jwt = require('jsonwebtoken');

module.exports = {
  login,
  register
};

async function login(req, res) {
  const { email, password } = req.body;
  // Verify user in DB, get user's user ID and sign it in jwt
  const token = jwt.sign({ userId: '' }, process.env.JWT_SECRET, {
    expiresIn: 60*60*24 // expire in a day
  });
}

async function register(req, res) {
  try {
    const { email, password, firstName, lastName } = req.body;
    // Register user
    return res.send({
      data: {},
      message: 'User successfully registered'
    });
  } catch (e) {
    return res.status(500).send({
      data: {},
      message: 'Something went wrong, please try again later'
    });
  }
}