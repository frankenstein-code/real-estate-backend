const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database"); // Assuming your sequelize configuration is correct
const Listing = require("./models/Listing"); // Import the Listing model for seeding
const listingRoutes = require("./routes/listingRoutes"); // Import the routes

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Sync database and optionally seed data in dev environment
sequelize.sync({ force: true }).then(() => {
  console.log("Database synced");

  // Optionally seed example data only in development environment
  Listing.bulkCreate([
    {
      title: "Luxury Apartment",
      description: "A spacious apartment in the city center.",
      price: 250000,
      location: "New York",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Beach House",
      description: "A beautiful house near the beach.",
      price: 500000,
      location: "California",
      image: "https://via.placeholder.com/150",
    },
  ]);
});

// Use routes
app.use("/api/listings", listingRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
