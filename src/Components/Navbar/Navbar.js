import React, { Component } from 'react'
import {Link}from 'react-router-dom'
import PropTypes from 'prop-types'

export class Navbar extends Component {
     
  static defaultProps= {
    title:'Github Finder',
    icon:'fab fa-github'
  }

  static propTypes= {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
  }
    render() {
        return (
            <nav className="navbar bg-primary">
                <Link exact='true' to="/"><h1>
                  <i className={this.props.icon}/> {this.props.title}</h1></Link>
                  <ul>
                    <li>
                      <Link exact='true' to='/'>Home</Link>
                    </li>
                    <li>
                      <Link  to='/About'>About</Link>
                    </li>
                  </ul>
            </nav>
        )
    }
}

export default Navbar
