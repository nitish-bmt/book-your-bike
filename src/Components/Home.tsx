import React from 'react';
import Navbar from './Navbar';

import Link from 'react-router-dom';

// MUI imports
import Button from '@mui/material/Button';

const Home: React.FC = ()=>{
    return(
        <>
            <Navbar/>
            <br/>
            <img src="../../public/images/banner1.jpg" alt="cool bike"></img>
            <Button variant="contained" href="/personal">Get Now!</Button>
        </>
    );
}

export default Home;