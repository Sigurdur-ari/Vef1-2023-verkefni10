import './App.css';
import React, { useState, useEffect } from 'react';
import { GetStation } from './Station';

function App() {
  /**
   * @type {any[]}
   */

  const [gasStations, setGasStations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://apis.is/petrol');
        const data = await response.json();
        const dataArray = Array.isArray(data) ? data : [data];
        setGasStations(dataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log('Gas Stations State:', gasStations);

  console.log(gasStations[0]);

  const results = gasStations[0];

  console.log('ndfjksn', results);
  return (
    <div>
      {gasStations.map((station, index) => (
        <GetStation key={index} station={station} />
      ))}
    </div>
  );
}

export default App;
