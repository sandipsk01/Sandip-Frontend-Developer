import React, { useState, useEffect } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import axios from 'axios';
import Grid from './components/Grid/Grid';
import Navbar from './components/Navbar/Navbar';
import { dataContext } from './context';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData]= useState([]);
  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v3/capsules');
        setData(response.data);
        setFilteredData(response.data);
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
      <dataContext.Provider value={{ data, setData, filteredData, setFilteredData }}>
        <SearchForm />
        <Grid />
      </dataContext.Provider>
    </div>
  );
}

export default App;
