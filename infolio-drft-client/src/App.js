import React from 'react';
import logo from './logo.svg';
import UserMenu from './components/menus/UserMenu'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserMenu />
      </header>
    </div>
  );
}

export default App;
