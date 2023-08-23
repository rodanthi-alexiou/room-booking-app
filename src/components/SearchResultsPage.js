import React from 'react';
import './SearchResultsPage.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function SearchResultsPage() {

  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('/api/listings')
      .then(res => res.json())
      .then(listings => setListings(listings));
  }, []);



  const location = useLocation();
  const searchTerms = location.state;

  return (
    <div className="search-results-container">
      <div className="search-terms-box">
        <p className="search-terms-text">
        <span className="showing-results-text">Showing results for..</span> 
          <br />
          Place: {searchTerms.place}
          <br />
          Date: {searchTerms.date}
          <br />
          People: {searchTerms.people}
        </p>
      </div>
      {listings.map((listing, index) => (
        <div key={listing.listingId}  className="search-result-box">
          <Link to={`/listings/${listing.listingId}`}>
            <img src={listing.picture_url} className="listing-picture" alt={listing.name} />
          </Link>
          <br />
          {listing.name}
          <br />
          {listing.description}
          <br />
          {listing.price}
          <br />
          {listing.bedrooms}
          <br />
          {listing.city}

        <ul>
          {listing.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
        </div>
      ))}
    </div>
  );
}

export default SearchResultsPage;
