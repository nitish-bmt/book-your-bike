import React from 'react';
import Navbar from './Navbar';
import {useState} from 'react';

// MUI imports
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const PersonalDetails: React.FC = ()=>{

    const [model, setModel] = useState("");

    const handleChange = (event: SelectChangeEvent) =>{
        setModel(event.target.value as string);
        localStorage.setItem('model', model);
        console.log(model);
    }

    return(
        <>
            <Navbar/>
            <h2>Choose your bike</h2>

            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Model</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={model}
                label="Model"
                onChange={handleChange}
            >
                <MenuItem value={101}>Hero-Harley</MenuItem>
                <MenuItem value={102}>Mavrick</MenuItem>
                <MenuItem value={103}>Harley DavidPutra 3000CC</MenuItem>
                
            </Select>
            </FormControl>

            <Button variant="contained" href="/booking">Confirm</Button>
        </>
    );
}

export default PersonalDetails;