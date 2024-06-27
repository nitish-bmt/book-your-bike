import React from 'react';
import Navbar from './Navbar';

import { useForm, SubmitHandler } from "react-hook-form";
import {useNavigate} from 'react-router-dom';

import dayjs from 'dayjs';

// MUI imports
import Button from '@mui/material/Button';
import { StaticDateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'

// const navigate = useNavigate();
// const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) => {
    
//     console.log(data);
//     localStorage.setItem('personalData', JSON.stringify(data));
//     navigate("/vehicle");
// }

const BookingDetails: React.FC = () => {
    // interface IFormValues{
    //     name: string
    //     email: string
    //     phone: string
    //     address: string
    // }
    return (
        <>
            <Navbar />
            <h2>Booking Details</h2>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                </LocalizationProvider>

                <Button variant="contained" href="/summary">Book</Button>
            {/* </form> */}
        </>
    );
}

export default BookingDetails;