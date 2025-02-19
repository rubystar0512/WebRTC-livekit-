const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { AccessToken } = require("livekit-server-sdk");

dotenv.config();
const app = express();
const SERVER_PORT = process.env.PORT || 6080;
const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || "meeting_mvp";
const LIVEKIT_API_SECRET =
  process.env.LIVEKIT_API_SECRET || Date.now().toString();

const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

const route = require("./route");
app.use("/api", route);

const server = app.listen(SERVER_PORT, () => {
  console.log(`Server running`);
  mongoose.connect(MONGO_URI).then(() => {
    console.log("Mongoose Connected");
  });
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
