import React from 'react';
import './App.css';
import Header from './Header';
import TinderCard from './TinderCards';


function App() {
  return (
    <div className="app">

      <Header />
      <TinderCard />
      {/* swipe component */}
    </div>
  );
}

export default App;
