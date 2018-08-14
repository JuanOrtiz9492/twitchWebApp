import React from 'react'
import Navbar from '../uiComponents/navBar'
import Footer from '../uiComponents/Footer'
const Main =()=>{
    return(
        <React.Fragment>
            <Navbar/>
            <article>
                <h2 id="whatIs">What is this web page for?</h2>
                <p aria-labelledby="whatIs">Nanopool Monitor is a web page that will help you to keep track of yor mining operation.
                    <br/>
                    the only thing you will need is to provide your wallet address and then you will be able to
                    catch data like:
                </p>
                <ul aria-label="available information by the app">
                        <li>Average Hashrate  over the day</li>
                        <li>Hashrate Histoy</li>
                        <li>Workers Information</li>
                        <li>Payment History</li>
                </ul>
            </article>
            <Footer/>
        </React.Fragment>
    );
} 

export default Main