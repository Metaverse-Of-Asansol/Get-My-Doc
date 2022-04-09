const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
require("./config/database").connect();
const auth = require("./routes/auth");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", auth);

app.get("/api/home", function (req, res) {
  res.json({
    message: "Hi Everyone Welcome To Website",
  });
});

app.get("/api", function (req, res) {
  try {
    res.json({
      message: "Hi Abir Pal This Is Succcess Route",
      success: true,
    });
  } catch (error) {
    res.json({
      message: "Hi Abir Pal",
      success: false,
      errMessage: error.message,
    });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log(`App connected to the server at Port ${PORT}`);
});
