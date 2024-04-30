import React, { useState, useMemo } from 'react';

const FilteredList = ({ items, filterTerm }) => {
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => item.toLowerCase().includes(filterTerm.toLowerCase()));
  }, [items, filterTerm]);

  return (
    <div>
      <h2>Filtered List</h2>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const App2 = () => {
  const [filter, setFilter] = useState('');
  const items = ['Apple', 'Banana', 'Orange', 'Mango'];

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h1>Filter Example</h1>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Enter filter term"
      />
      <FilteredList items={items} filterTerm={filter} />
    </div>
  );
};

export default App2;
