import React from 'react';
import Navbar from './Navbar';

const PersonalDetails: React.FC = ()=>{

    // const details = JSON.parse(localStorage.getItem('personalData'))
    return(
        <>  
            <Navbar/>
            <h2>Summary</h2>
            <p>Congratulations for your booking! <br/>Details: {localStorage.getItem('personalData')}</p>
        </>
    );
}

export default PersonalDetails;