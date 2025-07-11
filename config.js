import mongoose from "mongoose";
import chalk from "chalk";

export const { PORT = 3000 } = process.env;

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jonathandajome:MH4dCwfGjJWGXiKd@cluster0.nknpqhn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`Database connected ${chalk.green.bold("✓")}`);
  } catch (err) {
    console.log(`Connection error ${chalk.red.bold(err)}`);
  }
};
