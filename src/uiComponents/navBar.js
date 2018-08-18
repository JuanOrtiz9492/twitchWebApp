import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/navBar.css'
import {connect} from 'react-redux'
import * as actions from '../actions/index'

class Navbar extends React.Component {
    constructor(props){
        super(props)

    }


    render(){

        console.log(this.props)

    return(
        <header className="mainHeader">
            <h1><NavLink to="/">nanopool monitor</NavLink></h1>
            <nav>
                <NavLink to="/demo"><button onClick={this.props.mainPage}>Demo</button></NavLink>
                <NavLink to="/monitor"> <button onClick={this.props.mainPage}>Try It</button> </NavLink>
            </nav>
        </header>
    )
    }
}

export default connect(null,actions)(Navbar)