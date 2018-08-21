import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'
import '../styles/navBar.css'

class Navbar extends React.Component {
    constructor( props ){
        super( props )

    }


    render(){
        const mainPage = this.props.mainPage
    return(
        <header className="mainHeader">
            <h1><NavLink to="/"> nanopool monitor </NavLink></h1>
            <nav>
                <NavLink to="/demo">    <button onClick ={ mainPage }>  Demo   </button></NavLink>
                <NavLink to="/monitor"> <button onClick = { mainPage }> Try It </button> </NavLink>
            </nav>
        </header>
    )
    }
}

export default connect( null , actions ) ( Navbar )