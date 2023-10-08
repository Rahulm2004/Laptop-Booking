import { Card, CardActionArea, Stack, TextField, Typography} from '@mui/material';
import '../css/Forgot.css';
import React from 'react'
import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import forgot from "../assests/forgotgif.gif";
function Forgot(){
    function checkdata  (){

        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
        let confirmpassword=document.getElementById("confirmpassword").value;

        if(email===""){
           alert("please enter email");
        }
        else if(password===""){
           alert("please enter password");
        }
        else if(confirmpassword===""){
           alert("please enter confirmpassword");
        }
        else{
           alert("hello")
        }
    }    

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return(
        <div>
            <div className='forgot'>
                <Card className='forgotcard'>
                    <Stack direction={"row"}>
                        <Typography>
                            <CardActionArea>
                               <img style={{width:"15cm",height:"80vh"}} src={forgot} alt='ima'/>
                            </CardActionArea>
                      
                        </Typography>
                        <Typography>

                            <Stack direction={"column"} spacing={3}>
                                <div className='text'>
                                   <p>Forgot Password?</p>
                                </div>
                                <TextField sx={{width:"315px"}} className='detail' id="email"  label="Email" variant="outlined"/>

                                <FormControl className='detail' sx={{ width: '315px' }} variant="outlined">
                                   <InputLabel > Password</InputLabel>
                                      <OutlinedInput  id="password"
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

                                <TextField sx={{width:"315px"}} className='detail' id="confirmpassword"  label="ConfirmPassword" variant="outlined"/>

                                <button onClick={checkdata} className='forgotbutton'>Reset Password</button>

                            </Stack>
                        </Typography>
                        

                    </Stack>
                </Card>
            </div>
        </div>
    );
}
export default Forgot;