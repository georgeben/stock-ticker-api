
const getStockTickerData = require('./getStockTickerData')

describe("********* get stock ticker data ********", () => {
  it("gets stock ticker data", async () => {
    const data = { 'Global Quote': {symbol: 'IBM', price: 200} }
    const stockTickerProvider = {
      getStockTicker: () => Promise.resolve(data)
    }
    const database = { tables: { stocksTickers: [] } }
    const tickerSymbol = 'TEST'
    const result = await getStockTickerData({ stockTickerProvider, database })(tickerSymbol)
    expect(result).toBeDefined()
    
    expect(result.id).toEqual(tickerSymbol)
  });

});