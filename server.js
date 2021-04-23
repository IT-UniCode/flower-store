import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from 'dotenv';

import userRouter from './src/routes/user/index.js';
import basketRouter from './src/routes/basket/index.js';
import goodsRouter from './src/routes/goods/index.js';

const app = express();
const port = config().parsed.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = config().parsed.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use('/goods', goodsRouter);
app.use('/user', userRouter);
app.use('/basket', basketRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
