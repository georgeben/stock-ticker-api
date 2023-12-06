/**
 * Sets up dependency injection which decouples your core application code from the intricacies of the DI mechanism.
 */
const awilix = require('awilix')
const Database = require("./infra/database")
const config = require("./config")
const routes = require('./rest-api/router')
const { scopePerRequest } = require('awilix-express')
const StockTickerProvider = require("./infra/StockTickerProvider")


const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY
})

container.register({
  config: awilix.asValue(config),
  database: awilix.asClass(Database, {
    lifetime: awilix.Lifetime.SINGLETON
  }),
  routes: awilix.asFunction(routes),
  containerMiddleware: awilix.asValue(scopePerRequest(container)),
  stockTickerProvider: awilix.asClass(StockTickerProvider)
})

container.loadModules(
  [
    // Load use-cases
    [
      "usecases/**/*!(index.js).js",
      {
        lifetime: awilix.Lifetime.SCOPED,
        register: awilix.asFunction,
      },
    ],
  ],
  {
    formatName: "camelCase",
    resolverOptions: {},
    cwd: __dirname,
  },
);

module.exports = container;


