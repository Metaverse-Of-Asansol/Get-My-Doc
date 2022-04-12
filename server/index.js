const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
require("./config/database").connect();

const auth = require("./routes/auth");

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

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

const PORT =  process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App connected to the server at Port ${PORT}`);
});
