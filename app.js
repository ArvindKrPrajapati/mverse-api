const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// routes
const auth = require("./routes/auth.route");

// middleware
const authlogin = require("./middleware/auth.middleware");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/v1/auth", auth);

app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome" });
});

const init = async () => {
  try {
    await mongoose.connect(process.env.URL);
    app.listen(PORT, () => console.log("server is listening at PORT " + PORT));
  } catch (error) {
    console.log(error);
  }
};
init();
