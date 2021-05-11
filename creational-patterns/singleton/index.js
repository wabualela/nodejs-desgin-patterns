const Logger = require("./logger");
const Shopper = require("./shopper");
const Store = require("./Store");

var logger = new Logger();

logger.log("Starting app...");

var kamal = new Shopper("Kamal", 500);
var fawry_shop = new Store("Steep and Deep Supplies", [
  {
    item: "Downhill Skis",
    qty: 5,
    price: 750,
  },
  {
    item: "Knit Hat",
    qty: 20,
    price: 5,
  },
]);

logger.log("Finish config...");

console.log(`${logger.count} logs total.`);
