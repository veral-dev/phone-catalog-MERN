const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_REMOTE, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('BBDD Connected');
  } catch (error) {
    console.log(error);
    process.exit(1); //Stop the app
  }
};

module.exports = connectDB;
