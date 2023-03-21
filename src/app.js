import express from "express";
import router from "./routers/users.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
app.use(router);
app.listen(process.env.PORT, () => {
  console.log(`chay duoc roi nhe: ${process.env.PORT}`);
});