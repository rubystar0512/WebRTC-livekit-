const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Hello World");
});

router
  .route("/meeting")
  .get((req, res) => {
    res.send("Meeting Route");
  })
  .post((req, res) => {
    res.send("Meeting Route");
  })
  .delete((req, res) => {
    res.send("Meeting Route");
  });

module.exports = router;
