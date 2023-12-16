import React from 'react'
import './Services.css'
import WhatsApp from '../../img/WhatsApp.png'
import Msg from '../../img/Msg.png'
import qmark from '../../img/qmark.png'
import Card from '../Card/Card'



const Services = () => {
  return (
    <div className='services' id='Services'>
        {/*Left side*/}
        <div className="title">
            <span>What We</span>
            <span>Offer?</span>
            <span> With a user-friendly interface and AI-driven capabilities, 
                <br/>
                you can design chatbots that deliver engaging content and much more.
            </span>
            <button className='button s-button'>Try Now</button>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>

        </div>
        {/*Right side*/}
        <div className="cards">
          {/* First Card */}
          <div style={{left:'20rem', top:'5rem'}}>
            <Card
              img = {Msg}
              heading = {'Voice-Enabled ChatBot Creation'} 
              detail = {"Voice-Recognition technology makes it easier for users"}
            />
          </div>
          {/* Second Card */}
          <div style={{top:'15rem',left:'-10rem'}}>
            <Card
              img = {WhatsApp}
              heading = {'WhatsApp Business Integration'} 
              detail = {"This enables automated and interactive customer conversations"}
            />
          </div>
          {/* Third Card */}
          <div style={{top:'12rem',left:'5rem'}}>
            <Card
              img = {qmark}
              heading = {'24/7 Customer Support'} 
              detail = {"An automated system that responds to customer queries"}
            />
          </div>
          <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div>


      
    </div>
  )
}

export default Services
