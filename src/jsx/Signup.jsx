import { Card, MenuItem, Stack, TextField, Typography } from '@mui/material';

import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../css/Signup.css';
import axios from "axios";
import {useNavigate,Link} from 'react-router-dom';



 function Signup(){
    
  const [firstName, setfName] = useState("");
  const [lastName, setlName] = useState("");
  const[gender,setGender]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [mobileno, setMobile] = useState("");

  const navigate=useNavigate();
  async function handleSubmit(event)
   {
       event.preventDefault();
   try
       {
        await axios.post("http://localhost:8080/saveuser",
       {
       email:email,
       password:password,
       firstname: firstName,
       lastname:lastName,
       mobileno:mobileno,
       gender:gender,
       });
       alert("User Registeration Successful");

         setfName("");
         setlName("");
         setPass("");
         setMobile("");
         setEmail("");
         setGender("");
         if(setfName!==""&&setlName!==""&&setPass!==""&&setMobile!==""&&setEmail!==""&&setGender!==""){

           navigate("/");
         }
       }
   catch(err)
   {
     alert("User Registation Failed");
   }
  }
  function checkdata  (){
    let firstname=document.getElementById("firstname").value;
    let lastname=document.getElementById("lastname").value;
    let gender=document.getElementById("gender").value;
    let mobileno=document.getElementById("mobileno").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
   
     if(firstname===""){
        alert("please enter firstname");
    }
    else if(lastname===""){
      alert("please enter lastname");
    }
    else if(gender===""){
      alert("please select gender");
    }
    else if(mobileno===""){
      alert("please enter mobile number");
    }
    else if(email===""){
      alert("please enter email");
    }
    else if(password===""){
        alert("please enter password");
    }
    
    else{
        navigate(("/"));
    }
}
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    return(
          <div className='signup'>
            <Card className='signupcard'>
            <div className='signup1'>
                <Stack direction={'row'}>
                    <div className='left'>
                      <Card id='card1'>
                         
                      </Card>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className='right'>
                            
                      <Stack  direction={"column"} spacing={3}>
                            <div>
                              <Typography><p className='acc'>Create Account</p></Typography>
                                <Stack className='name' direction={"row"} spacing={2}>
                                    
                                      <TextField sx={{width:"200px"}} id="firstname"  label="Firstname" variant="outlined" onChange={(event) =>{setfName(event.target.value);}}/>
                                   
                                      <TextField sx={{width:"200px"}} id="lastname" label="Lastname" variant="outlined" onChange={(event) =>{setlName(event.target.value);}}/>
                                    
                                </Stack>
                            </div>
                            <div className='gender'>    
                                <Stack direction={"row"} spacing={2}>
                                  <span>
                                    <TextField style={{width:"3.2cm"}} id="gender" select label="Gender" onChange={(event) =>{setGender(event.target.value);}} >
                                       {genders.map((option) => (
                                          <MenuItem key={option.value} value={option.value} >
                                            {option.label}
                                          </MenuItem>
                                        ))}
                                    </TextField>
                                  </span>
                                  <span>
                                   <TextField sx={{width:"279px"}} id="mobileno" type='number' label="Mobile no" variant="outlined" onChange={(event) =>{setMobile(event.target.value);}}/>
                                  </span>
                                </Stack>
                            </div>
                            <div id="signupemail">
                               <TextField sx={{width:"415px"}} id="email" label="Email" variant="outlined" onChange={(event) =>{setEmail(event.target.value);}}/>
                            </div>
                            <div className="signuppass">
                            <FormControl sx={{ width: '415px' }} variant="outlined">
                               <InputLabel id="password"> Password</InputLabel>
                                 <OutlinedInput id="outlined-adornment-password" onChange={(event) =>{setPass(event.target.value);}}
                                     type={showPassword ? 'text' : 'password'}
                                      endAdornment={
                                        <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                             onClick={handleClickShowPassword}
                                               onMouseDown={handleMouseDownPassword}
                                               edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                        </InputAdornment>
                                      } 
                                      label="Password"/>
                            </FormControl>
                            </div>
                            <div >
                              <button onClick={checkdata} className='signupbutton'>Signup</button>
                            </div>
                            <Stack style={{marginLeft:"9%"}} direction={"row"} spacing={1}>

                            <Typography>Already have an account ?</Typography>
                            <Typography><Link to ="/">Sign in</Link></Typography>
                            </Stack>
                          </Stack>
                        </div>
                    </form>
                  </Stack>
            </div>  
            </Card>  
          </div>
    );
 }
 const genders = [
    {
        value: 'Male',
        label: 'Male ',
    },
    {
        value: 'Female',
        label: 'Female',
    },

    {
        value: 'Other',
        label: 'Other',
    },
    
];
 export default Signup;