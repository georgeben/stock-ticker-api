function getStockTickerData({ stockTickerProvider, database }) {
  return async (tickerSymbol) => {
    const tickerRepository = database.tables.stocksTickers

    // Improvisation to access data
    // TODO Use a repository for accessing the data store
    let tickerData = tickerRepository.find((el) => el.id === tickerSymbol)
    if (!tickerData) {
      
      const response = await stockTickerProvider.getStockTicker(tickerSymbol);
      tickerData = { id: tickerSymbol, ...response['Global Quote'] }
      tickerRepository.push(tickerData)
    }
    return tickerData

  }
}

module.exports = getStockTickerData