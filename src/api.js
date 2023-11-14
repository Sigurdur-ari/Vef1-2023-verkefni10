import React, { useState } from 'react';

export async function LoadApi() {
  const [gasStations, setGasStations] = useState([]);

  const url = 'https://apis.is/petrol';

  try {
    const response = await fetch(url);
    const json = response.json();
  } catch (error) {}
}
