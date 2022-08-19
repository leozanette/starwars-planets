import React from 'react';
import './App.css';
import FilteredName from './components/FilteredName';
import FilteredNumbers from './components/FilteredNumbers';
import Table from './components/Table';

function App() {
  return (
    <div>
      <div>
        <FilteredName />
      </div>
      <div>
        <FilteredNumbers />
      </div>
      <Table />
    </div>
  );
}

export default App;
