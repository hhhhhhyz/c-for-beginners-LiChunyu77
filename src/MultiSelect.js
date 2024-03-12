import React, { useState } from 'react';

const MultiSelect = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const items = [
    { id: 1, label: 'New(NEW)' },
    { id: 2, label: 'Active(ACT)' },
    { id: 3, label: 'Price Change(PCG)' },
    { id: 4, label: 'Back on Market(BOM)' },
    { id: 5, label: 'Extended(EXT)' },
    { id: 6, label: 'Reactivated(RAC)' },
    { id: 7, label: 'Item ' },
    { id: 8, label: 'Contigent(CTG)' },
    { id: 9, label: 'Under Agreement' },
    { id: 10, label: 'Sold(SLD)' },
    { id: 11, label: 'Temporarily Withdrawn(WDN)' },
    { id: 12, label: 'Expired(EXP)' },
    { id: 13, label: 'Canceled(CAN)' },
    { id: 14, label: 'Coming Soon(CSO)' },
  ];

  const handleSelectAll = () => {
    const allSelected = !selectAll;
    setSelectAll(allSelected);
    if (allSelected) {
      setSelectedItems(items.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (itemId) => {
    let updatedSelectedItems = [...selectedItems];
    if (updatedSelectedItems.includes(itemId)) {
      updatedSelectedItems = updatedSelectedItems.filter((item) => item !== itemId);
    } else {
      updatedSelectedItems = [...updatedSelectedItems, itemId];
    }
    setSelectedItems(updatedSelectedItems);
    setSelectAll(updatedSelectedItems.length === items.length);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
        Select All
      </label>
      <div style={{ columnCount: 2, columnGap: '5px' }}>
        {items.map((item) => (
          <label
            key={item.id}
            style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}
          >
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => handleSelectItem(item.id)}
            />
            <span style={{ marginLeft: '5px' }}>{item.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;