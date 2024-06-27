import React from 'react';
import './App.css';


// Components
import Home from './Components/Home';
import PersonalDetails from './Components/PersonalDetails';
import ServiceDetails from './Components/ServiceDetails';
import BookingDetails from './Components/BookingDetails';
import Summary from './Components/Summary';

function App() {
  return (

      <div className="App">
        <Home/>
        {/* <PersonalDetails/>
        <BookingDetails/>
        <ServiceDetails/>
        <Summary/> */}

      </div>
);
}

export default App;
