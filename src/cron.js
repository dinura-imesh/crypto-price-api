const cron = require("node-cron");
const Scraper = require("./scraper");
const Store = require("./store");

const scheduleDataScrape = () => {
  cron.schedule("*/1 * * * *", () => {
    Scraper.scrape().then((data) => Store.instance.setData(data));
  });
};

module.exports = scheduleDataScrape;
