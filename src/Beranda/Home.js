import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import file CSS baru

const Home = () => {
  const navigate = useNavigate();
  const headingRef = useRef();

  useEffect(() => {
    const text = "Selamat datang di Aplikasi Kasir!";
    let index = 0;
  
    if (headingRef.current) { // Menambahkan kondisi untuk memeriksa apakah headingRef sudah terdefinisi
      const interval = setInterval(() => {
        headingRef.current.innerText += text[index];
        index++;
  
        if (index === text.length) {
          clearInterval(interval);
          headingRef.current.classList.add('blink-caret'); // Menambahkan kelas untuk membuat kursor berkedip
        }
      }, 100);
  
      return () => clearInterval(interval);
    }
  }, []);
  
  const handleNavigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <h1 ref={headingRef} className="heading"></h1>
      <div className="button-container">
        <button className="button" onClick={() => handleNavigateTo('/POS')}>POS</button>
        <button className="button" onClick={() => handleNavigateTo('/Database')}>Persediaan Barang</button>
      </div>
    </div>
  );
};

export default Home;
