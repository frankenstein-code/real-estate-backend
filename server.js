const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");
const Listing = require("./models/Listing");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Sync database
sequelize.sync({ force: true }).then(() => {
  console.log("Database synced");

  // Seed example data
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

// API routes
app.get("/api/listings", async (req, res) => {
  const listings = await Listing.findAll();
  res.json(listings);
});

app.post("/api/inquiries", (req, res) => {
  console.log("Inquiry received:", req.body);
  res.json({ message: "Inquiry sent!" });
});

// Add this route to fetch a listing by ID
app.get("/api/listings/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findByPk(id);

  if (!listing) {
    return res.status(404).json({ message: "Listing not found" });
  }

  res.json(listing);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
