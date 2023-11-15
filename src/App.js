import './App.css';
import React, { useState, useEffect } from 'react';
import { GetStation } from './Station';

function App() {
  /**
   * @type {any[]}
   */

  const [gasStations, setGasStations] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, []);

  const results = gasStations[0];
  return (
    <div className='grid'>
      {results &&
        results.results.map((station, index) => (
          <GetStation key={index} station={station} />
        ))}
    </div>
  );
}

export default App;
