function removeStockTicker({ database }) {
  return async (tickerSymbol) => {
    const tickerRepository = database.tables.stocksTickers
    let tickerIndex = tickerRepository.findIndex((el) => el.id === tickerSymbol)

    if (tickerIndex < 0) {
      const error = new Error("The ticker symbol you provided was not found")
      error.name = "NOT_FOUND"
      throw error;
    }
    database.delete("stocksTickers", tickerSymbol)
  }
}

module.exports = removeStockTicker