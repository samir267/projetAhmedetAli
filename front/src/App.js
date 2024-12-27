import React from 'react';
import './App.css';
import AddItem from './components/addItem';
import ItemList from './components/itemList';

const App = () => {
  return (
    <div>
      <h1>Application CRUD</h1>
      <AddItem />
      <ItemList />
    </div>
  );
};

export default App;
