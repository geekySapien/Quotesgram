const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

//Importing Routes
const authRoute = require("./routes/auth");
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');

//DB connection

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Succesfully connected to database✨"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use('/api/posts', postRoute);

app.listen(5000, () => {
  console.log("Server is up and running😉");
});
