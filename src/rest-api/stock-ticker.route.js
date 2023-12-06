const express = require('express')
const { makeInvoker } = require('awilix-express')
const expressJoi = require('express-joi-validation')
const StockTickerController = require('./controllers/StockTickerController')
const { getStockTickerSchema } = require("./validations/ticker-symbol.validation")

const router = express.Router()
const api = makeInvoker(StockTickerController)
const validate = expressJoi.createValidator({ passError: true })

router.get("/", validate.query(getStockTickerSchema), api("get"))
router.delete("/:tickerSymbol", api("delete"))
router.put("/:tickerSymbol", api("update"))

module.exports = router;