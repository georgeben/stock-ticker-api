const httpStatusCodes = require('http-status-codes')

function errorHandler(err, req, res, next) {
  console.log("Error occurred", err)
  let statusCode = httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR
  if (err.name && err.name !== "Error") {
    statusCode = httpStatusCodes.StatusCodes[err.name]
  }
  return res.status(statusCode).json({ message: `An error occurred: ${err.message}` })
}

module.exports = errorHandler