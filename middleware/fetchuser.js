// ✅ FILE: backend/middleware/fetchuser.js
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Namraisagoodboy";

const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ error: "No token provided" });
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};
module.exports = fetchuser;
