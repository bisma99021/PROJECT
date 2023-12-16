import React from 'react'
import Tabs from './Tabs/Tabs'
import FirstTab from './Tabs/Components/FirstTab'
import SecondTab from './Tabs/Components/SecondTab'

const Home = () => {
  return (
    <div className="Home">
      <Tabs 
        tab1Content={<FirstTab />}
        tab2Content={<SecondTab />}/>
    </div>
  )
} 

export default Home
