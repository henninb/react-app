import React, { useState } from 'react';

const EditableTable = () => {
  const [tableData, setTableData] = useState([
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 }
  ]);

  const handleCellValueChange = (id, field, value) => {
    setTableData(prevData =>
      prevData.map(item => {
        if (item.id === id) {
          return { ...item, [field]: value };
        }
        return item;
      })
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(item => (
          <tr key={item.id}>
            <td>
              <input
                type="text"
                value={item.name}
                onChange={e => handleCellValueChange(item.id, 'name', e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                value={item.age}
                onChange={e => handleCellValueChange(item.id, 'age', e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EditableTable;
