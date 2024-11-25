const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("realestate", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
