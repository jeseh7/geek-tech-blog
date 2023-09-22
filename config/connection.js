// const Sequelize = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306,
//   }
// );

// module.exports = sequelize;

const Sequelize = require('sequelize');
require('dotenv').config();

// Check if the app is running in a production environment (Heroku)
if (process.env.NODE_ENV === 'production') {
  // Use the DATABASE_URL environment variable provided by Heroku
  var sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  // Use your local development configuration
  var sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

module.exports = sequelize;
