const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars').where("id", id)
}

const getByVin = (vin) => {
  return db('cars').where({vin})
}

const create = (car) => {
  return db('cars')
    .insert(car)
    .then(res => getById(res[0]))
}

module.exports = {
  getAll,
  getById,
  getByVin,
  create
}
