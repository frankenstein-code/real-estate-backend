const Listing = require("../models/Listing");

const getAllListings = async () => {
  try {
    return await Listing.findAll();
  } catch (error) {
    console.error("Error fetching listings:", error);
    throw new Error("Failed to fetch listings.");
  }
};

const getListingById = async (id) => {
  try {
    const listing = await Listing.findByPk(id);
    if (!listing) {
      throw new Error("Listing not found");
    }
    return listing;
  } catch (error) {
    console.error("Error fetching listing by ID:", error);
    throw new Error(error.message || "Failed to fetch listing.");
  }
};

const handleInquiry = async (inquiryData) => {
  try {
    console.log("inquiryData", inquiryData);
    // This is a placeholder; you can implement actual email sending logic here.
    console.log("Inquiry received:", inquiryData);
    return { message: "Inquiry sent!" };
  } catch (error) {
    console.error("Error handling inquiry:", error);
    throw new Error("Failed to send inquiry.");
  }
};

module.exports = {
  getAllListings,
  getListingById,
  handleInquiry,
};
