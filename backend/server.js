// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load env variables

const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
  }));
app.use(express.json({ limit: "10mb" }));

app.post("/api/roast", async (req, res) => {
  const { formData, lang } = req.body;

  const prompt = `You are "Guruji" – savage Malayali astrologer...\nUser: ${formData.name}, Age: ${formData.age}, etc...\nReply in ${lang === "ml" ? "PURE MALAYALAM" : "ENGLISH"}...`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.95,
        max_tokens: 700,
      }),
    });

    const data = await response.json();
    res.json({ roast: data.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ roast: "മോനേ... ഗുരുജി ഇപ്പോൾ ധ്യാനത്തിലാണ് 😭" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
