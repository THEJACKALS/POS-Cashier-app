import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import file CSS baru
import useTypewriter from './typewriter'; // Import hook useTypewriter

const Home = () => {
  const navigate = useNavigate();
  const headingRef = useTypewriter("LOCALSALARY POS"); // Menggunakan hook useTypewriter
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigateTo = (path) => {
    navigate(path);
  };

  const handleMenuButtonClick = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <div className="container">
      <div ref={headingRef} className="heading" aria-label="Selamat datang di Aplikasi Kasir!"></div>
      <div className="button-container">
        <button className="button" onClick={() => handleNavigateTo('/POS')}>POINT OF SALES</button>
        <button className="button" onClick={() => handleNavigateTo('/Database')}>Persediaan Barang</button>
      </div>
      <div className="menu-button" onClick={handleMenuButtonClick}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      {menuOpen && (
        <div className={`popup ${menuOpen ? 'active' : ''}`} id="menuPopup">
          {/* Konten popup menu di sini */}
          <ul>
            <li onClick={() => handleNavigateTo('/settings')}>Settings</li>
            <li onClick={() => handleNavigateTo('/Extras')}>Extras</li>
            <li onClick={() => handleNavigateTo('/help')}>Help</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
