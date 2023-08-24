import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ListingDetailPage.css';

function ListingDetailPage() {
  const { listingId } = useParams();
  const [listingDetails, setListingDetails] = useState({});

  useEffect(() => {
    // Fetch the listing details using listingId
    fetch(`/api/listings/${listingId}`)
      .then(response => response.json())
      .then(data => setListingDetails(data))
      .catch(error => console.error('Error fetching listing details:', error));
  }, [listingId]);

  return (
    <div className="listing-detail-container">
      <div className="listing-details">
        <h2>Listing Details</h2>
        <p>Listing ID: {listingId}</p>
        <h2>Name: {listingDetails.name}</h2>
        <p>Description: {listingDetails.description}</p>
        {/* Display other listing details */}
      </div>
    </div>
  );
}

export default ListingDetailPage;

