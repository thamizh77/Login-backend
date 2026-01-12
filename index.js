const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.status(200).send("Backend is running 🚀");
});

// Mock user
const USER = {
  email: "test@netflix.com",
  password: "123456",
};

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password required",
    });
  }

  if (email === USER.email && password === USER.password) {
    return res.json({ success: true });
  }

  return res.status(401).json({
    message: "Invalid credentials",
  });
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
