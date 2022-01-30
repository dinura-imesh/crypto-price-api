const axios = require("axios");
const cheerio = require("cheerio");
const Utils = require("./utils");

const URL = "https://goldprice.org/cryptocurrency-price";

const Scraper = {
  scrape: async () => {
    const dataArr = [];
    try {
      const response = await axios
        .get(URL, { headers: { "User-Agent": "" } })
        .catch((e) => console.log(e.message));
      const $ = cheerio.load(response.data);
      $("table.views-table>tbody>tr").each(function (i, elm) {
        const text = $(this).text();
        const replaced = text.replace(/(\r\n|\n|\r)/gm, "|");
        const prepared = Utils.prepareData(replaced.split(" ").join("")).split(
          "|"
        );
        dataArr.push({
          id: prepared[1],
          name: prepared[2].trim(),
          marketCap: prepared[3],
          price: prepared[4],
          change: prepared[7],
        });
      });
      return dataArr;
    } catch (_) {
      return [];
    }
  },
};

module.exports = Scraper;
