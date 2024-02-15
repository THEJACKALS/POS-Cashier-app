import React, { useState } from 'react';
import './Pos.css'; // Import file CSS baru
import SearchPopup from './SearchPopup'; // Import komponen SearchPopup

const Header = ({ credits, total }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State untuk mengontrol tampilan popup

  const togglePopup = () => {
    setIsPopupOpen(prevState => !prevState);
  };

  return (
    <header className="header" style={{ backgroundColor: '#95DEC0' }}>
      <div className="header-content">
        <div className="header-left">
          <h1>DNR Pulukan</h1>
        </div>
        <div className="header-right">
          <div className="total">Rp. 1000{total}</div>
        </div>
      </div>
      {isPopupOpen && <SearchPopup handleClose={togglePopup} />} {/* Menampilkan popup jika isPopupOpen true */}
      <button className="search-button" onClick={togglePopup}>Cari Barang</button> {/* Tombol pencarian */}
    </header>
  );
};

export default Header;
