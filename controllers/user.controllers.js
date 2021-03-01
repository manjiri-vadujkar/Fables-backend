const { getById, update } = require("../models/User.model");

module.exports = {
  getUserDetails,
  subscribe
};

async function getUserDetails(req, res) {
  try {
    const users = await getById(req.decodedToken.userId);
    if (!users || users.length === 0) {
      return res.status(404).send({
        data: {},
        message: 'User not found!'
      });
    }
    return res.send({
      data: users[0],
      message: 'User found'
    });
  } catch (e) {
    return res.status(500).send({
      data: {},
      message: 'Failed to get user'
    });
  } 
}

async function subscribe(req, res) {
  try {
    await update([{ key: 'subscription', value: true }], req.decodedToken.userId);
    return res.send({
      data: {},
      message: 'Subscribed'
    });
  } catch (e) {
    return res.status(500).send({
      data: {},
      message: 'Failed to subscribe'
    });    
  }
}