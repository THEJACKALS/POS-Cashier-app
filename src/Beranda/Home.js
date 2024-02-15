import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import file CSS baru

const Home = () => {
  const navigate = useNavigate();
  const headingRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const text = "LOCALSALARY POS";
    let index = 0;

    if (headingRef.current) {
      const interval = setInterval(() => {
        headingRef.current.innerText += text[index];
        index++;

        // Menambahkan spasi setelah setiap karakter
        if (index < text.length) {
          headingRef.current.innerText += ' ';
        }

        if (index === text.length) {
          clearInterval(interval);
          headingRef.current.classList.add('blink-caret');
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, []);

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