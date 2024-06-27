import React from 'react';
import { useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import {useNavigate} from 'react-router-dom';

import Navbar from './Navbar';

// MUI imports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import { useForm, SubmitHandler } from "react-hook-form";

// Input Type
// type Inputs = {
//     example: string
//     exampleRequired: string
// }

const PersonalDetails: React.FC = ()=>{

    interface IFormValues{
        name: string
        email: string
        phone: string
        address: string
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IFormValues>();


    // type InputProps = {
    //     label: Path<IFormValues>
    //     register: UseFormRegister<IFormValues>
    //     required: boolean
    // }
    // const Input = ({label, register, required}: InputProps) => (
    //     <>
    //         <label>{label}</label>
    //         <input {...register(label, {required})} />
    //     </>
    // );

    interface Item {
        // Define the structure of each item if needed
        id: number;
        name: string|null;
        // Add more fields as necessary
    }
    // const [userData, setUserData] = useState<Item[]>([]);

    const navigate = useNavigate();
    const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) => {
        
        console.log(data);
        localStorage.setItem('personalData', JSON.stringify(data));
        navigate("/vehicle");
    }
    return(
        <>
            <Navbar/>
            <h2>Personal Details</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                
                <TextField 
                    required 
                    id="name" 
                    label="Name" 
                    variant="outlined" 
                    {...register(
                        'name', 
                        {   required: true, 
                            maxLength: 100
                        })
                    }
                /><br/>
                
                <TextField 
                    required 
                    id="email" 
                    label="Email" 
                    variant="outlined" 
                    {...register(
                        'email', 
                        {
                            pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i
                        })
                    }
                /><br/>

                <TextField 
                    required 
                    id="phone   " 
                    label="Phone No." 
                    variant="outlined" 
                    {...register(
                        'phone', 
                        {   required: true, 
                            maxLength: 100
                        })
                    }
                /><br/>

                <TextField 
                    required 
                    id="address" 
                    label="Address" 
                    variant="outlined" 
                    {...register(
                        'address', 
                        {   required: true, 
                            maxLength: 500
                        })
                    }
                /><br/>
                
                <input type="submit" />
                {/* <Button variant="contained" href="/vehicle">Next</Button> */}
            </form>
        </>
    );
}

export default PersonalDetails;