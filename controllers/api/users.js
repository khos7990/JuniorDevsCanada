const User = require("../../models/User");
const jwt = require("jsonwebtoken");

module.exports = {
  create,
  delete: deleteUser,
  login,
};

async function create(req, res) {
  console.log("hitting");
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {}

async function deleteUser(req, res) {}
