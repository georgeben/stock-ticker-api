const Joi = require('joi')

exports.getStockTickerSchema = Joi.object({
  symbol: Joi.string().trim().required()
})