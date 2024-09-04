// STRETCH
exports.seed = function(knex, Promise) {
    return knex('cars').truncate()
        .then(function () {
            return knex('cars').insert([
               {vin: 'test vin 1', make: 'Honda', model: 'Accord', milage: 125000, title: 'Honda Dealership 1', transmission: 'good'},
               {vin: 'test vin 2', make: 'Toyota', model: 'Corolla', milage: 96000, title: 'Toyota Dealership 2', transmission: 'excellent'},
               {vin: 'test vin 3', make: 'Subaru', model: 'Outback', milage: 28000, title: 'Subaru Dealership 1', transmission: 'fine'}
            ])
        })
}