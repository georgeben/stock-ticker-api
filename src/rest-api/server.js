const http = require('http')
const express = require('express')

class Server {
  constructor({ routes, config }) {
    const app = express()
    app.use(routes)
    this.server = http.createServer(app)
    this.config = config;
  }

  start() {
    this.server.listen(this.config.PORT, () => {
      console.log("Server is running....")
    })
  }

  close() {
    // shutdown database connection
    // clean up
    this.server.close(() => console.log("Server shutdown)"))
  }
}

module.exports = Server