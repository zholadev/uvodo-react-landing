import './App.css';
import React from 'react'
import Header from './components/header/Header';
import Manage from './components/manage/Manage';
import Store from './components/store/Store';
import Pay from './components/pay/Pay';
import Spot from './components/spot/Spot';
import Customer from './components/customer/Customer';
import Investment from './components/investment/Investment';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Manage />
      <Store />
      <Pay />
      <Spot />
      <Customer />
      <Investment />
    </React.Fragment>
  );
}

export default App;
