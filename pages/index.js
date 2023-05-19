import React, { useState } from 'react';
import Button from '../components/Button';

  const currentDate = new Date().toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });


const HomePage = () => {
  const [data, setData] = useState(null);
  const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=D6axwIEfsspeloRAsYm1MwaDxsNSJN5ZRvUDdE4B';

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: 'Bearer 0ef4f134-330d6-7df4e233465a',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{width: '70%', margin: '0 auto'}}>
      <h1>Nasa API Example</h1>
      <Button onClick={fetchData}>Fetch Data</Button>
{/* {data && (
  <pre>{JSON.stringify(data, null, 2)}</pre>
)} */}
      <img src={data.url} alt={data.title} />
    </div>
  );
};

export default HomePage;
