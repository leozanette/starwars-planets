import React from 'react';
import './App.css';
import FilteredName from './components/FilteredName';
import Table from './components/Table';

function App() {
  return (
    <div>
      <span>Hello, App!</span>
      <FilteredName />
      <Table />
    </div>
  );
}

export default App;
