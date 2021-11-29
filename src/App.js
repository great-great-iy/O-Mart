import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Purchase from './components/pages/Purchase';
import Test from './components/pages/Test';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Purchase} />
        <Route path='/productDetail' exact component={Test} />
      </Switch>
      {/* <Footer/> */}
    </Router>
    </>
  );
}

export default App;
