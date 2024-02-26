import express from "express";
import ApiQuery from "./ApiQuery";

const app = express();

app.use("/", ApiQuery);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
