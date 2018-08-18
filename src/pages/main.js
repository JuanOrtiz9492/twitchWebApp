import React from 'react'
import Navbar from '../uiComponents/navBar'
import Footer from '../uiComponents/footer'
import {ListGroup,ListGroupItem} from 'reactstrap'
import '../styles/homePage.css'
const Main =()=>{
    return(
        <React.Fragment>
            <Navbar/>
            <article className="webDescription">
                <h2 id="whatIs">What is this web page for?</h2>
                <p aria-labelledby="whatIs">Nanopool Monitor is a web page that will help you to keep track of yor mining operation.
                    <br/>
                    The only thing you will need is to provide your wallet address and then you will be able to
                    catch data like:
                </p>
                <ListGroup flush aria-label="information provided by the app">

                        <ListGroupItem>Average Hashrate  over the day</ListGroupItem>
                        <ListGroupItem>Hashrate Histoy</ListGroupItem>
                        <ListGroupItem>Workers Information</ListGroupItem>
                        <ListGroupItem>Payment History</ListGroupItem>

                </ListGroup>
            </article>
            <Footer/>
        </React.Fragment>
    );
} 

export default Main