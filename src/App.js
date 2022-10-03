import React from 'react';
import MenuParent from './components/MenuParent';
import MenuItem from './components/MenuItem';
import './App.css';

function App() {
  return (
    <>
      <MenuParent items = {['One', 'Two', 'Three']} dimention ={['10vw', '20vh']}/>
     
    </>
  );
}

export default App;
