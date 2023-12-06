function updateStockTicker({ database }) {
  return async (tickerSymbol, payload) => {
    const stockData = database.select("stocksTickers", tickerSymbol)
    if (!stockData) {
      const error = new Error("The ticker symbol you provided was not found")
      error.name = "NOT_FOUND"
      throw error;
    }

    return database.updateOne("stocksTickers", tickerSymbol, payload)
  }
}

module.exports = updateStockTicker