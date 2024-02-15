import React, { useState } from 'react';
import './SearchPopup.css'; // Import file CSS baru

const SearchPopup = ({ handleClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');
  
  const handleSearch = () => {
    // Contoh sederhana pencarian, gantilah dengan logika sesuai kebutuhan
    const foundItem = searchItem(searchTerm);

    if (foundItem) {
      setSearchResult(`Item ditemukan: ${foundItem}`);
      // Tambahkan logika untuk menambahkan item ke dalam list barang di POS
    } else {
      setSearchResult('Maaf, barang tidak ditemukan atau habis.');
    }
  };

  // Contoh fungsi pencarian sederhana, gantilah dengan logika sesuai kebutuhan
  const searchItem = (term) => {
    const availableItems = ['Barang1', 'Barang2', 'Barang3']; // Gantilah dengan daftar barang yang tersedia
    return availableItems.find(item => item.toLowerCase() === term.toLowerCase());
  };

  return (
    <div className="search-popup">
      <div className="search-popup-content">
        <input
          type="text"
          placeholder="Masukkan nama barang"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
         <div className="button-group">
            <button className="search-button2" onClick={handleSearch}>Cari</button>
            <button className="close-button2" onClick={handleClose}>Tutup</button>
        </div>
    <p>{searchResult}</p>
      </div>
    </div>
  );
};

export default SearchPopup;
