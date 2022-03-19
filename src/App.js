import axios from 'axios';
import React, { useEffect } from 'react';
import './App.css';
import NavigationBar from './Components/Navbar/NavigationBar';
import RouteFile from './Route/RouteFile';

const App = () => {

  useEffect(() => {
    axios.get('/user')
    .then(res => {
        localStorage.setItem("userData", JSON.stringify(res.data))
    })
    .catch(err => {
      localStorage.clear();
    })
  }, [])

  return (
    <div className="App">
      <NavigationBar />
      <RouteFile />
    </div>
  );
}

export default App;
