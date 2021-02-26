const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { add, getByEmail } = require('../models/User.model');

module.exports = {
  login,
  register
};

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const users = await getByEmail(email);
    if (!users || users.length === 0) {
      return res.status(404).send({
        data: {},
        message: 'User not found!'
      });
    }
    const user = users[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).send({
        data: {},
        message: 'Unauthorized!' 
      });
    }
    const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, {
      expiresIn: 60*60*24 // expire in a day
    });
    return res.send({
      data: {
        token
      },
      message: 'Login successful!'
    });
  }
  catch (e) {
    console.log(e);
    return res.status(500).send({
      data: {},
      message: 'Something went wrong, please try again later'
    });
  }
}

async function register(req, res) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    await add({
      userId: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      password: hash,
      subscription: false
    });
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