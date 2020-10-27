import React from 'react'
import {Switch, Route} from 'react-router-dom'

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Users from './Components/Users/Users';
import SearchBox from './Components/SearchBox/SearchBox';
import Alert from './Components/Alert/Alert';
import About from './Pages/About/About';
import UserPage from './Pages/UserPage/UserPage';

const App =()=> {
    return (
      <div className="App">
        <Navbar  />
        <div className="container">
          <Alert />
          <Switch>
            <Route exact path='/'>
              <SearchBox />
              <Users/>
            </Route>
            <Route path='/about'><About/></Route>
            <Route exact path='/user/:login'><UserPage/></Route> 
          </Switch>
        </div>
      </div>
    );
  }


export default App;
