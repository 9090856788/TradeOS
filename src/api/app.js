import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import dbConnect from './db/dbConnect.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}):`);
});
