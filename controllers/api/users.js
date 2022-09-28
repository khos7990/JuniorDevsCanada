const User = require("../../models/User");
const jwt = require("jsonwebtoken");

module.exports = {
  create,
  delete: deleteUser,
  login,
};

async function create(req, res) {
  try {
    console.log(req.body);
    const user = await User.create({
      user: req.body.user,
      email: req.body.email,
      password: req.body.password,
    });
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (req.body.password !== user.password) throw new Error();
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteUser(req, res) {}
