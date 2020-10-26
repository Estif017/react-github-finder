import React, { Component } from 'react'
import ReposItem from './ReposItem'

export class Repos extends Component {
    render() {
        return this.props.repos.map(repo=>(<ReposItem key={repo.id} repo={repo}/>))
      
    }
}

export default Repos
