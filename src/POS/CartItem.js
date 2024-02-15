import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-qty-price">
          QTY: {item.quantity} x Rp. {item.price}
        </div>
      </div>
      <div className="cart-item-total">Rp. {item.quantity * item.price}</div>
    </div>
  );
};

export default CartItem;