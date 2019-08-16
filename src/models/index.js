import mongoose from 'mongoose';

import User from './user';
import Message from './message';

//Database is deleted when server restart...if eraseDatabaseOnSync = true
const eraseDatabaseOnSync = false;

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}).then(
    async () => {
    console.log("Successfully connected to the database");
    if (eraseDatabaseOnSync) {
      await Promise.all([
        models.User.deleteMany({}),
        models.Message.deleteMany({}),
      ]);
      console.log("Database is deleted when server restart...");
    }  
    }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
    });
};

const models = { User, Message };

export { connectDb };

export default models;
