// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load env variables

const app = express();

// CORS setup
app.use(cors({
  origin: process.env.CLIENT_URL, // allow only your frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

// To parse JSON bodies
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
