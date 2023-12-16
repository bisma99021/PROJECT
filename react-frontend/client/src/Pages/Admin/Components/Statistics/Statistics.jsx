// Statistics.jsx
import React from 'react';
import Cards from '../Home/Tabs/Components/Cards/Cards';
import styles from './Statistics.module.css';
import { StatisticsData, StatisticsDataOne} from '../Data/Data';

const Statistics = () => {
  return (
    <div className={styles.Statistics}>
      <h1 style={{marginTop:'1rem'}}>STATISTICS</h1>
      <div className={styles.StatisticsCards}> {/* Add the custom class here */}
        <Cards data={StatisticsData} /><br/>
        <Cards data={StatisticsDataOne} /><br/>
      </div>
    </div>
  );
}

export default Statistics;
