import React from 'react';

function App() {
  const data = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {data.map((item, index) => (
           <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
