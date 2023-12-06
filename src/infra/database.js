class Database {
  constructor() {
    this.tables = {
      stocksTickers: []
    }
  }

  delete(from, id) {
    const table = this.tables[from]
    this.tables[from] = table.filter((el) => el.id !== id)
  }

  select(from, id) {
    const table = this.tables[from]
    return table.find((el) => el.id === id)
  }

  updateOne(from, id, update) {
    const index = this.tables[from].findIndex((el) => el.id === id)
    this.tables[from][index] = {
      ...this.tables[from][index],
      ...update
    }
    return this.tables[from][index]
  }

}

module.exports = Database;