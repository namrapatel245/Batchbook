require('dotenv').config(); // 👈 must be at the top

const mongoose = require('mongoose');
const port = process.env.PORT || 5000;


const connectToMongo = () => {
  console.log("MONGO_URI =", process.env.MONGO_URI); // for debugging
app.listen(port, '0.0.0.0', () => {
  console.log(`Batchbook backend listening on port ${port}`);
});

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));
};

module.exports = connectToMongo;
