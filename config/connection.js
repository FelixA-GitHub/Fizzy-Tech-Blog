const Sequelize = require("sequelize");

require("dotenv").config();

// create connection to our db
const sequelize = process.env.CYCLIC_URL
  ? new Sequelize(process.env.CYCLIC_URL)
  : new Sequelize(
      process.env.CYCLIC_NAME,
      process.env.CYCLIC_USER,
      process.env.CYCLIC_PW,
      {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
      }
    );

module.exports = sequelize;
