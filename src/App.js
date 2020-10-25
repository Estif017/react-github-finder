import React,{Component} from 'react'
import axios from 'axios'

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Users from './Components/Users/Users';


class App extends Component {

  state = {
    users:[],
    isLoading:false
  }

  async componentDidMount(){
    this.setState({isLoading: true})
    const res=await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({
        users: res.data,
      isLoading: false
    })
  }

  render(){
    const {users, isLoading}=this.state
    return (
      <div className="App">
        <Navbar  />
        <Users loading={isLoading} users={users}/>
      </div>
    );
  }
}

export default App;
