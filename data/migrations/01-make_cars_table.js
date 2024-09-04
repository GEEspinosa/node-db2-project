exports.up = function (knex, Promise) {//eslint-disable-line
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('vin')
      .unique()
      .notNullable();
    tbl.string('make')
      .notNullable();
    tbl.string('model')
      .notNullable();
    tbl.integer('mileage')
      .notNullable();
    tbl.string('title');
    tbl.string('transmission');
  })
};

exports.down = function (knex, Promise) {//eslint-disable-line
  return knex.schema.dropTableIfExists('cars')
};
