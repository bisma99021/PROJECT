import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
const Nav = () => {

  // old code
  //   <li><Link to='/Homepage' smooth= {true}>
  //   Home
  //  </Link></li>

  // new code
  //   <li><Link to='/' smooth= {true}>
  //   Home
  //  </Link></li>
  return (
    <div className='Nav' style={{marginLeft:'3.5rem'}}>
      <div className="nwrapper">
          <div className="nleft">
              <div className="name">BotWhizz</div>
              <button className="button btn " style={{width:'85px'}}>Demo</button>
  
          </div>
          <div className="nright">
              <div className="list">
                  <ul style={{listStyleType: 'none'}}>
                  <Link to='/'  style={{ textDecoration: 'none'}}>
                    <button className='button home' style={{marginLeft:'-10rem', textDecoration:'none'}}>
                      Home
                    </button>
                  </Link>  
                  </ul>
              </div>
             
             
          </div>
        
      </div>
    </div>
  )
}

export default Nav
