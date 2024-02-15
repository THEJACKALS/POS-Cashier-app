import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Beranda/Home';
import POS from './POS/Cart'; // Ubah path sesuai dengan struktur folder
import Inventory from './Database/DataBarang'; // Pastikan Anda telah membuat komponen untuk halaman Database

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pos" element={<POS />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;