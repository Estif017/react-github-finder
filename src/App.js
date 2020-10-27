import React from 'react'
import {Switch, Route} from 'react-router-dom'

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Alert from './Components/Alert/Alert';
import About from './Pages/About/About';
import UserPage from './Pages/UserPage/UserPage';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

const App =()=> {
    return (
      <div className="App">
        <Navbar  />
        <div className="container">
          <Alert />
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/about'><About/></Route>
            <Route exact path='/user/:login'><UserPage/></Route> 
            <Route><NotFound/></Route>
          </Switch>
        </div>
      </div>
    );
  }


export default App;
