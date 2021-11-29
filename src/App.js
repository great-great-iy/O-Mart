import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Purchase from './components/pages/Purchase';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Purchase} />
      </Switch>
      {/* <Footer/> */}
    </Router>
    </>
  );
}

export default App;
