const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  create,
  delete: deleteUser,
  login,
};

async function create(req, res) {
  try {
    console.log(req.body);
    const hashedPass = await bcrypt.hash(req.body.password, SALT_ROUNDS);
    const user = await User.create({
      user: req.body.user,
      email: req.body.email,
      password: hashedPass,
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
    if (await bcrypt.compare(user.password, req.body.password))
      throw new Error();
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteUser(req, res) {}
