const express = require('express')
const bodyParser = require("body-parser")
const stockTicker = require('./stock-ticker.route');
const errorHandler = require("./middleware/errorHandler");


module.exports = ({ containerMiddleware }) => {
  const router = express.Router()

  router.use(containerMiddleware);

  router.use(bodyParser.json())

  router.use("/stock-tickers", stockTicker)

  router.use(errorHandler)

  return router;
};