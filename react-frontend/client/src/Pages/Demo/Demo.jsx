import React from 'react'
import Nav from '../nav/nav'
import './Demo.css'
import {Link} from 'react-router-dom'

const Demo = () => {
  return (
    <div>
      <Nav />
      <div className="demo">
        <div className="left">
          <div className="heading">
            <span>Documentation &</span>
            <span>Tutorial</span>
          </div>
          <Link to='/Login'  style={{ textDecoration: 'none' }}><button className="button m-button">
            Try BotWhizz Now
          </button></Link>
          <div className="d-blur" style={{background:"#ead5dc",top:'6rem',left:'40rem'}}></div>
        </div>
        <div className="right">
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Demo
