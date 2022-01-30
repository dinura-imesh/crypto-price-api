const scheduleDataScrape = require("./src/cron");
const express = require("express");
const Store = require("./src/store");

const app = express();

const startServer = async () => {
  console.log("Starting cron job");
  scheduleDataScrape();
  app.listen(process.env.PORT || 8000, () => console.log("Server started"));
};

app.get("/", (_, res) => res.send(Store.instance.getData()));

startServer();
