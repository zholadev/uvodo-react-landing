import './App.css';
import React from 'react'
import Header from './components/header/Header';
import Manage from './components/manage/Manage';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Manage />
    </React.Fragment>
  );
}

export default App;
