import express from "express";
import router from "./routers/users.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(express.json());
mongoose.connect(`${process.env.URI_DB}`)
app.use( router);
export const viteNodeApp = app;
// app.listen(process.env.PORT, () => {
//   console.log(`chay duoc roi nhe: ${process.env.PORT}`);
// });