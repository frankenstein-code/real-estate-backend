const ListingService = require("../service/listingService");

const getAllListings = async (req, res) => {
  try {
    const listings = await ListingService.getAllListings();
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching listings", error });
  }
};

const getListingById = async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await ListingService.getListingById(id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: "Error fetching listing", error });
  }
};

const handleInquiry = async (req, res) => {
  const { name, email, message, listingId } = req.body;
  // Handle inquiry (e.g., save it to the database or send an email)
  res.json({ message: "Inquiry sent successfully!" });
};

module.exports = {
  getAllListings,
  getListingById,
  handleInquiry,
};
