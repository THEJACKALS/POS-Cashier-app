import React, { useState } from 'react';
import Item from './Item';

const ItemList = () => {
  const items = [
    {
      id: 1,
      code: '12345',
      name: 'Hanya Contoh',
      quantity: 1,
      price: 98000,
    },
    // Add more items here
  ];

  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;