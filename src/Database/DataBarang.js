import React from 'react';

class DataBarang extends React.Component {
  handleClick = () => {
    // Tambahkan logika untuk aksi yang ingin dilakukan saat tombol ditekan di sini
    console.log('Tombol ditekan!');
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <button onClick={this.handleClick}>Tekan Saya</button>
      </div>
    );
  }
}

export default DataBarang;
