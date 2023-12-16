import React from 'react'
import './About.css'
import User from "../../img/user.png"
import robotUser from "../../img/robotUser.png"
import app from "../../img/app.png"
import client from "../../img/client.png"
import metric from "../../img/metric.png"
import yellowCircle from "../../img/yellowCircle.png"
import blueCircle from "../../img/blueCircle.png"

const About = () => {
  return (
    <div className="aboutUs" id='About'>
        {/*Left side*/}
        <div className="title" style={{top:'5rem'}}>
            <span >Building With </span>
            <span >BotWhizz</span>
            <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
            <span style={{fontSize: "20px"}}><br/> Welcome to BotWhizz!</span>
            <span><br/>We are passionate about making learning interactive and engaging for everyone. <br/>
                Our mission is to provide a user-friendly platform that empowers educators <br/>and organizations 
                to create their own customized chatbots for educational purposes.<br/></span>
            <span ><br/>So, whether you're a teacher, student, or lifelong learner,
                join us in revolutionizing education through the power of chatbots. 
                <br/>
            </span><br/>
            <span style={{fontSize:"20px",fontWeight:"bold"}}><br/><b>Let's make learning engaging, interactive, and fun for everyone!</b></span>
            <div className="blur" style={{background:"#e8d1c5", top:'44rem',left:'-7rem'}}></div>
        </div>
        {/* Right Side */}
        <div className="a-right" style={{marginTop:'2.5rem'}}>
            <div className="a-mainCircle">
                <div className="a-secCircle">
                    <img src={client} alt=""/>
                </div>
                <div className="a-secCircle">
                    <img src={robotUser} alt="" style={{transform:"scale(0.4)"}}/>
                </div>
                <div className="a-secCircle">
                    <img src={app} alt="" style={{transform:"scale(0.25)"}}/>
                </div>
                <div className="a-secCircle">
                    <img src={metric} alt="" style={{transform:"scale(0.55)"}}/>
                </div>
                <div className="a-secCircle">
                    <img src={User} alt="" style={{transform:"scale(0.6)"}}/>
                </div>
            </div>
            {/* Background Circles */}
            <div className="a-backCircle blueCircle">
                <img src={blueCircle} alt="" />
            </div>
            <div className="a-backCircle yellowCircle">
                <img src={yellowCircle} alt="" />
            </div>
        </div>
    </div>
  );
}

export default About
