require('dotenv').config(); // 👈 must be at the top

const mongoose = require('mongoose');

const connectToMongo = () => {
  console.log("MONGO_URI =", process.env.MONGO_URI); // for debugging

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));
};

module.exports = connectToMongo;
