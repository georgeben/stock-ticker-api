require('dotenv').config()


module.exports = {
  PORT: process.env.PORT || 5000,
  alphavantageApiKey: process.env.ALPHA_ADVANTAGE_API_KEY,
  alphavantageApiUrl: process.env.ALPHA_ADVANTAGE_BASE_URL,
}