import React from 'react'
import '../styles/footer.css'

const Footer=()=>{
    return(

        <footer aria-label="social networks from coder" className="socialNetworks">

            <div id="coded-info">
                <p id="codedby">coded by: </p>
                <a aria-labelledby="codedby" href="https://codepen.io/INGortizh/" target="_blank">Juan Ortiz</a>
            </div>

            <div id="social-networks">
                <p>Follow me on my social networks</p>

                <div id="social-icons"> 
                    <a aria-label="link to Instagram" href="https://www.instagram.com/ortizjuandavid/" target="_blank"><i className="fa fa-instagram"></i></a>
                    <a aria-label="link to Facebook" href="https://www.facebook.com/ortizjuandavid" target="_blank"><i className="fa fa-facebook-square"></i></a>
                    <a aria-label="link to github"  href="https://github.com/JuanOrtiz9492" target="_blank"><i className="fa fa-github"> </i></a>
                    <a aria-label="link to twitter" href="https://twitter.com/JuanDavid9204?lang=es" target="_blank"><i className="fa fa-twitter"></i></a>
                </div>

            </div>

        </footer>
    )
}

export default Footer