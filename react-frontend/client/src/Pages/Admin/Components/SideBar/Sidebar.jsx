import React from 'react';
import './Sidebar.css';
import Logo from '../../../../img/logo.png';
import { SidebarData } from '..//Data/Data';
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { useState } from 'react'
import { RiMenuUnfoldFill } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx';
const Sidebar = ({ setSelectedComponent }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className='ham-sidebar'>
        <RiMenuUnfoldFill cursor={'pointer'} onClick={() => setToggle(true)} />
      </div>
      <div className={`Sidebar ${toggle && "active-sidebar"}`}>
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="" />
          <span>
            Bot
            <span>W</span>
            hizz
          </span>
        </div>
        {/* Menu */}
        <div className="menu">
          <RxCross2 cursor={'pointer'} className='cross-menu' onClick={() => setToggle(false)} />
          {SidebarData.map((item, index) => (
            <div
              key={index}
              className='menuItem '
              onClick={() => setSelectedComponent(item.heading)}
            >
              <div className="menuItemLink active">
                <item.icon />
                <span>{item.heading}</span>
              </div>
            </div>
          ))}
          <div className="menuItem">
            <div className="menuItemLink">
              <UilSignOutAlt />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar;
