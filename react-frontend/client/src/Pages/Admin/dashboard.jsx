import React, { useState } from 'react';
import './admin.css';
import Sidebar from './Components/SideBar/Sidebar';
import Statistics from './Components/Statistics/Statistics';
import Queries from './Components/Queries/Queries'; 
import Home from './Components/Home/Home';
import ChatBots from './Components/ChatBots/ChatBots';
import Templates from './Components/Templates/Templates';
import Settings from './Components/Settings/Settings';
// ... (import statements)

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('Home'); // Default selected component

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Statistics':
        return <Statistics />;
      case 'Queries':
        return <Queries />;
      case 'Home':
        return <Home />;
      case 'ChatBots':
        return <ChatBots />;
      case 'Templates':
        return <Templates />;
      case 'Settings':
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className='dashboard' id='dashboard'>
      <div className="dashboardGlass">
        <Sidebar setSelectedComponent={setSelectedComponent} />
        <div className="content">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
