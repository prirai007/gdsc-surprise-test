import React, { useState } from 'react';
const ItemList = () => {
  const initialItems = [
    { id: 1, name: 'virat kohli' },
    { id: 2, name: 'rohit sharma' },
    { id: 3, name: 'sachin tendulkar' },
    { id: 4, name: 'yuvraj singh' },
    { id: 5, name: 'ms dhoni' },
  ];
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(initialItems)
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = initialItems.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default ItemList;