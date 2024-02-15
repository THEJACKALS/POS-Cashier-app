import React from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = [
    // Add cart items here
  ];

  return (
    <div className="cart">
      <h2>Keranjang</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-total">
        Total: Rp. {/* Calculate and display the total here */}
      </div>
    </div>
  );
};

export default Cart;