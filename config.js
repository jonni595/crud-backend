import mongoose from "mongoose";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();

export const { PORT = 3000, MONGODB_URI } = process.env;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`Database connected ${chalk.green.bold("✓")}`);
  } catch (err) {
    console.log(`Connection error ${chalk.red.bold(err)}`);
  }
};
