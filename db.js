const mongoose = require('mongoose');

const connectToMongo = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/batchbook');
    console.log('Connected to Mongo');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Exit the app on failure
  }
};

module.exports = connectToMongo;
