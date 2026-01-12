const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const USER = {
  email: "test@netflix.com",
  password: "123456",
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    return res.json({ success: true });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

// ❌ REMOVE app.listen()
// ✅ EXPORT app
module.exports = app;
