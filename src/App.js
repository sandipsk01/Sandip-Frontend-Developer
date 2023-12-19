import { useState, useEffect } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import axios from 'axios';
import Grid from './components/Grid/Grid';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [data, setData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v3/capsules');
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once on component mount
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Grid data={data} />
    </div>
  );
}

export default App;
