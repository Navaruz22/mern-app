const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

const PORT = config.get("port") || 5000;

app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.routes.js"));

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

start();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
