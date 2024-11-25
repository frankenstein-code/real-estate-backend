const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Listing = sequelize.define("Listing", {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  price: DataTypes.FLOAT,
  location: DataTypes.STRING,
  image: DataTypes.STRING,
});

module.exports = Listing;
