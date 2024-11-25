const express = require("express");
const listingController = require("../controllers/listingController");

const router = express.Router();

// Get all listings
router.get("/", listingController.getAllListings);

// Get a listing by ID
router.get("/:id", listingController.getListingById);

// Handle inquiries
router.post("/inquiries", listingController.handleInquiry);

module.exports = router;
