import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connected");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Set a timeout (5 sec)
    socketTimeoutMS: 45000, // Prevents function shutdown due to inactivity
    keepAlive: true,
  });
};

export default connectDB;
