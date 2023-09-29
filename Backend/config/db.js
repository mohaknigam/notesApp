// db.js

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let connection = null;

const connectDB = async () => {
  if (!connection) {
    try {
      connection = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });

      console.log(`MongoDB connected at ${connection.connection.host}`);
    } catch (error) {
      console.error(error);
      process.exit();
    }
  }
  return connection;
};

export default connectDB;
