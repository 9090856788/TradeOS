import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log('MongoDB database connected successfully');
      })
      .catch(error => {
        console.error('Error connecting to MongoDB:', error);
      });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default dbConnect;
