import React, { Component } from 'react'

export class SearchBox extends Component {
    state = {
        searchField:''
    }

    onChange=e=>{
        this.setState({searchField:e.target.value})
    }
    
    onSubmit = e => {
        e.preventDefault()

        this.props.searchUsers(this.state.searchField)
        this.setState({searchField: ''})
    }

    onClick=e => {
        e.preventDefault()
        this.props.clearUsers()
    }

    render() {
        const {searchField}=this.state

        return (
            <div>                
                <form className='form' onSubmit={this.onSubmit}>
                    <input type="text"
                     placeholder='search users...'
                     value={searchField}
                     onChange={this.onChange} />
                    <button className='btn btn-dark btn-block'>Search</button>
                </form>
                {this.props.showClear && (<button
                 className='btn btn-light btn-block'
                 onClick={this.onClick}
                 >Clear</button>)} 
            </div>
        )
    }
}

export default SearchBox
