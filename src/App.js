import React,{Component} from 'react'

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Users from './Components/Users/Users';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Navbar  />
        <Users />
      </div>
    );
  }
}

export default App;
