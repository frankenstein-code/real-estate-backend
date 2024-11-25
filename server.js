const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");
const Listing = require("./models/Listing");
const listingRoutes = require("./routes/listingRoutes");
const seedData = require("./seeder/listingSeeder");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Sync database and optionally seed data in dev environment
sequelize.sync({ force: true }).then(() => {
  console.log("Database synced");

  // Optionally seed example data only in development environment
  Listing.bulkCreate(seedData)
    .then(() => {
      console.log("Seed data successfully added!");
    })
    .catch((error) => {
      console.error("Error adding seed data:", error);
    });
});

// Use routes
app.use("/api/listings", listingRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
