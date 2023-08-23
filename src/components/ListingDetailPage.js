import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SearchResultsPage.css';

function ListingDetailPage() {
  const { listingId } = useParams(); // Get the dynamic listingId parameter from the route
  const [listingDetails, setListingDetails] = useState({}); // State to store fetched listing details

  useEffect(() => {
    // Fetch the listing details using listingId
    fetch(`/api/listings/${listingId}`)
      .then(response => response.json())
      .then(data => setListingDetails(data))
      .catch(error => console.error('Error fetching listing details:', error));
  }, [listingId]); // Fetch when listingId changes

  return (
    <div className="search-results-container">
      <div className="search-terms-box">
        <h2>Listing Details</h2>
        <p>Listing ID: {listingId}</p>
        {/* Display other listing details here */}
        <p>Name: {listingDetails.name}</p>
        <p>Description: {listingDetails.description}</p>
        {/* Display other listing details */}
      </div>
    </div>
  );
}

export default ListingDetailPage;

