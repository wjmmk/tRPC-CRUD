const mongoose = require('mongoose');
/* import mongoose from 'mongoose'; */

export const dbConnect = async () => {
  try {
        mongoose.set('strictQuery', false)
        const db = await mongoose.connect(process.env.DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
    console.log('MongoDB connected to: ', db.connection.db.databaseName);
  } catch (error) {
    console.log(error);
  }
}
