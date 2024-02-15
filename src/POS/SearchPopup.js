import React from 'react';
import './Pos.css'; // Import file CSS baru

const SearchPopup = ({ handleClose }) => {
  const handleSearch = () => {
    // Logika pencarian barang
    console.log('Melakukan pencarian...');
  };

  return (
    <div className="search-popup">
      <div className="search-popup-content">
        {/* Input pencarian */}
        <input type="text" placeholder="Cari barang..." />
        {/* Tombol Cari */}
        <button className="search-button2" onClick={handleSearch}>Cari</button>
        {/* Tombol Tutup */}
        <button className="close-button2" onClick={handleClose}>Tutup</button>
      </div>
    </div>
  );
};

export default SearchPopup;
