import express from 'express';
import dotenv from 'dotenv';
import routes from "./app/routes/index.js";
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the API routes
app.use('/api', routes);

// Function to connect to MongoDB
const connectToMongoDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/social_db");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectToMongoDb(); // Connect to MongoDB
});
