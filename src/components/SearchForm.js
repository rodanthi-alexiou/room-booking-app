import React, { useState } from 'react';
import './SearchForm.css';
import logo from '../Images/logo.png';
import { useNavigate } from 'react-router-dom';

function SearchForm() {
  const [placeTerm, setPlaceTerm] = useState('');
  const [dateTerm, setDateTerm] = useState('');
  const [peopleCount, setPeopleCount] = useState('');

  // Get the navigate function from useNavigate
  const navigate = useNavigate();

  const handlePlaceChange = (event) => {
    setPlaceTerm(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateTerm(event.target.value);
  };

  const handlePeopleChange = (event) => {
    setPeopleCount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Pass the search terms as state when navigating
    navigate('/results', { state: { place: placeTerm, date: dateTerm, people: peopleCount } });
  };

  return (
    <div className="search-form-container">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo-image" />
      </div>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for places... (Country, City, Neighborhood etc.)"
          value={placeTerm}
          onChange={handlePlaceChange}
        />
        <input
          type="text"
          placeholder="Enter dates... ex.(11/7 - 19/7)"
          value={dateTerm}
          onChange={handleDateChange}
        />
        <input
          type="number"
          placeholder="Number of people"
          value={peopleCount}
          onChange={handlePeopleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
