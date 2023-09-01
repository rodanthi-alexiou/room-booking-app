import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SearchPage from './components/SearchPage';
import SearchResultsPage from './components/SearchResultsPage'; 
import ListingDetailPage from './components/ListingDetailPage'; 
import UserProfilePage from './components/UserProfilePage';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/results" element={<SearchResultsPage />} />
        <Route path="/listings/:listingId" element={<ListingDetailPage />} /> {/* Dynamic route */}
        <Route path="/user/:userId" element={<UserProfilePage />} /> {/* Dynamic route */}
      </Routes>
    </Router>
  );
}



export default AppRoutes;
