import React from 'react'
import './Contact.css'
import gmail from '../../img/gmail.png'
import WBapp from '../../img/WBapp.png'
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="c-wrapper" id='Contact'>
        <div className="c-heading">
            <span>Feel free to reach out to our dedicated support team for any inquiries. </span>
            <span style={{ color: "var(--orange)"}}>We're here to help!</span>
            <div className="blur s-blur1" style={{background:"var(--purple)"}}></div>
            <div className="blur s-blur2" style={{background:"#fde5db"}}></div>
        </div>
        <div className="contact">
            <span style={{marginTop:'3rem'}}><br/>Contact us on any of the following</span><br/>
            <div className="icon" style={{marginBottom:'3rem'}}>
            <Link to='#'
              onClick={(e) => {
                window.location.href = "mailto:no-reply@example.com";
                e.preventDefault();
              }}
            > 
              <img src={gmail} alt="" style={{transform:"scale(1.7)"}}/>
            
            </Link>
                <img src={WBapp} alt="" />

            </div>
           
            


        </div>
      
    </div>
  )
}

export default Contact
