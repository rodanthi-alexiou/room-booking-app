import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ListingDetailPage.css';

function ListingDetailPage() {
  const { listingId } = useParams();
  const [listingDetails, setListingDetails] = useState({});
  const [unavailableDates, setUnavailableDates] = useState([
    '2023-08-10',
    '2023-08-15',
    '2023-08-25'
  ]);
  const [currentMonth, setCurrentMonth] = useState(7); // August is month 7

  useEffect(() => {
    // Fetch the listing details using listingId
    fetch(`/api/listings/${listingId}`)
      .then(response => response.json())
      .then(data => setListingDetails(data))
      .catch(error => console.error('Error fetching listing details:', error));
  }, [listingId]);

          /* send a POST request to /api/bookings */
    function bookListing() {
      fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: 2,
          listing: listingId,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          alert('Booking successful!');
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Booking failed!');
        });
    }


      // Assuming currentMonth is a variable that stores the current month (0-11 for Jan-Dec)
      function updateCalendar(currentMonth, unavailableDates) {
        const daysInMonth = new Date(2023, currentMonth + 1, 0).getDate();

        return Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;
          const date = new Date(2023, currentMonth, day);
          const isUnavailable = unavailableDates.includes(date.toISOString().split('T')[0]);
          return (
            <div key={day} className={`day-cell ${isUnavailable ? 'unavailable' : ''}`}>
              {day}
            </div>
          );
        });
      }

  
  const calendarDays = updateCalendar(currentMonth, unavailableDates);


  return (
    <div className="listing-detail-container">
      <div className="listing-details">
        <h2>Listing Details</h2>
        <img src={listingDetails.pictureUrl} className="listing-picture" />

  
        
        <h2>{listingDetails.name}</h2>
        <p>Location: {listingDetails.city}</p>
        <p>Description: {listingDetails.description}</p>
        {/* Display other listing details */}

        <div className="calendar">
          <div className="calendar-header">
            <button className="prev-month-btn" onClick={() => setCurrentMonth(currentMonth - 1)}>
              &lt;
            </button>
            <span className="month">
              {new Date(2023, currentMonth, 1).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
              })}
            </span>
            <button className="next-month-btn" onClick={() => setCurrentMonth(currentMonth + 1)}>
              &gt;
            </button>
          </div>

          <div className="calendar-grid">{calendarDays}</div>
        </div>


        <h2>Do you want to book the listing?</h2>
        
        <button className="book-button" onClick={bookListing}>Book Now</button>




      </div>
    </div>
  );
}

export default ListingDetailPage;


