import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGO;
if (mongoUri) {
  mongoose.connect(mongoUri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.warn('MongoDB connection failed:', err.message));
} else {
  console.warn('MONGO env variable not set - running without database');
}

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});