import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="item">
      <div className="item-code">{item.code}</div>
      <div className="item-details">
        <div className="item-name">{item.name}</div>
        <div className="item-qty-price">
          QTY: {item.quantity} x Rp. {item.price}
        </div>
      </div>
      <div className="item-total">Rp. {item.quantity * item.price}</div>
    </div>
  );
};

export default Item;