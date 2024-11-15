const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AuthController = {
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res
          .status(400)
          .json({ message: "Username and password are required!" });
      }

      const data = await User.getByUsername(username);
      const user = data[0];

      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Password is incorrect!" });
      }

      const token = await jwt.sign(
        {
          username: user.username,
          role: user.role,
        },
        process.env.SECRET_KEY,
        {
          algorithm: "HS256",
          allowInsecureKeySizes: true,
          expiresIn: 86400,
        }
      );

      res.status(200).json({
        token: token,
        username: user.username,
        role: user.role,
        nama: user.nama,
      });
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  logout: async (req, res) => {
    let token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized - Missing Token" });
    }

    const decodedToken = jwt.verify(
      token.split(" ")[1],
      process.env.SECRET_KEY
    );

    if (!decodedToken || !decodedToken.username) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    try {
      req.session.destroy();

      res.status(201).json({ message: "Logout success!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = AuthController;
