const RestServer = require('./rest-api/server')
const container = require('./container')

const server = new RestServer(container.cradle)

server.start()