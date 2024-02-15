import React from 'react'

const Header = ({ totalPrice }) => {
  return (
    <header className="header" style={{ backgroundColor: 'green' }}>
      <h1>DNR Pulukan</h1>
      <h2>Total: Rp. {totalPrice}</h2>
    </header>
  )
}

const Product = ({ onBuy, price }) => {
  return (
    <div>
      <h3>Product Name</h3>
      <p>Rp. {price}</p>
      <button onClick={() => onBuy(price)}>Beli</button>
    </div>
  );
}

const App = () => {
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleBuy = (price) => {
    setTotalPrice(totalPrice + price);
  }

  return (
    <div>
      <Header totalPrice={totalPrice} />
      <Product onBuy={handleBuy} price={10000} />
    </div>
  );
}

export default App;