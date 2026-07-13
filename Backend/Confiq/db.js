const Sequelize = require('sequelize');

const db = new Sequelize(
  'mysql://root:WIWymgReTFeWEMUPGywwLNlFuxasxeuX@yamanote.proxy.rlwy.net:20381/railway',
  {
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = db;