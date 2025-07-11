import express from "express";
import chalk from "chalk";

import { PORT, connectDB } from "./config.js";
import { productRouter } from "./routes/product.route.js";

const app = express();
connectDB();

// middleware
app.use(express.json());

// Routes
app.use("/api", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${chalk.green.underline(PORT)}`);
});
