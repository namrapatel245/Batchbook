// ✅ FILE: backend/index.js
const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

connectToMongo();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.use('/api/messages', require('./routes/messages'));

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});