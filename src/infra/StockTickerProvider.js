const axios = require('axios')

class StockTickerProvider {
  constructor({ config }) {
  
    this.client = axios.create({
      baseURL: config.alphavantageApiUrl,
    });
    this.apikey = config.alphavantageApiKey
  }

  async getStockTicker(symbol) {
    // TODO handle errors
    const response = await this.client.get('/query', {
      params: {
        function: 'GLOBAL_QUOTE',
        symbol: symbol,
        apikey: this.apikey
      }
    })

    const { data } = response
    if (!data['Global Quote']) {
      const error = new Error("Could not fetch stock ticker data")
      throw error
    }

    return response.data
  }
}

module.exports = StockTickerProvider