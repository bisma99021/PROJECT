import React from 'react'
import './Main.css';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import robot from '../../img/robot.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import img1 from '../../img/img2.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';


const Main = () => {
  return (
    <div className="main" id="Main">
      <div className="m-left" style={{marginTop: '1.5rem'}}>
        <div className="m-name">
            <span>NO-CODE CHATBOT BUILDER FOR YOUR  </span>
            <span>EDUCATIONAL BASED BUSINESSES</span>
            <span>This is a fun & intuitive platform that allows you to create 
              chatbots according to your own needs
            </span>
        </div>
        <button  className="button m-button">Try BotWhizz Now</button>
        
      </div>
      <div className="m-right" style={{marginTop: '2.5rem'}}>
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={robot} alt="" />
        <img src={img1} alt="" />
        <div className="floating-div"style={{top:'-8%', left:'58%'}}>
          <FloatingDiv image={Crown} txt1='No Credit' txt2='Card Required'/>
        </div>
        <div className="floating-div" style={{top:'16rem', left:'-3rem'}}>
          <FloatingDiv image={thumbup} txt1='No Coding' txt2='Required'/>
        </div>
        {/*blur background*/}
        <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur" style={{background:"#d49e8d", top:'12rem'}}></div>
        <div className="blur" style={{background:"#C1F5FF", top: '12rem', width: '21rem', height: '11rem', left:'-9rem'}}></div>

      </div>
    </div>
  )
}

export default Main
