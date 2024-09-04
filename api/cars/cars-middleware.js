const Cars = require('./cars-model')
const vinValidator = require('vin-validator')

const checkCarId = async (req, res, next) => {
  const car = await Cars.getById(req.params.id)
  if (!car.length) {
    res.status(404).json({
      message: `car with id ${req.params.id} is not found`
    })
  } else {
    req.car = car
    next()
  }
}

const checkCarPayload = (req, res, next) => {
  const {vin, make, model, mileage} = req.body
  if (!vin) {res.status(400).json({ message: 'vin is missing' })}
  else if (!make) {res.status(400).json({ message: 'make is missing' })}
  else if (!model) {res.status(400).json({ message: 'model is missing' })}
  else if (!mileage) {res.status(400).json({ message: 'mileage is missing' })}
  else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  const vin = req.body.vin
  const validate = vinValidator.validate(vin)
  if(!validate){
    res.status(400).json({message: `vin ${vin} is invalid`})
  } else {
    next()
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  const check = await Cars.getByVin(req.body.vin)
  if(check[0]){
    res.status(404).json({ message: `vin ${check[0].vin} already exists`})
  } else {
    next()
  }  
} 

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
