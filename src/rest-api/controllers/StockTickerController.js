const { pick } = require("lodash");

class StockTickerController {
  constructor({ getStockTickerData, removeStockTicker, updateStockTicker }) {
    this.getStockTickerData = getStockTickerData
    this.removeStockTicker = removeStockTicker
    this.updateStockTicker = updateStockTicker
  }

  async get(req, res) {
    const { symbol } = req.query;
    const result = await this.getStockTickerData(symbol)
    return res.json({
      message: "Successfully fetched stock ticker",
      data: result
    })
  }

  async delete(req, res) {
    const { tickerSymbol } = req.params;
    await this.removeStockTicker(tickerSymbol)
    return res.json({
      message: "Successfully removed stock ticker",
    })
  }

  async update(req, res) {
    const { tickerSymbol } = req.params;
    const payload = pick(req.body, [
      "01. symbol",
      "02. open",
      "03. high",
      "04. low",
      "05. price",
      "06. volume",
      "07. latest trading day",
      "08. previous close",
      "09. change",
      "10. change percent",
    ])
    const result = await this.updateStockTicker(tickerSymbol, payload)
    return res.json({
      message: "Successfully updated stock ticker",
      data: result
    })
  }
}

module.exports = StockTickerController