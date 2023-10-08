import { Card, CardActionArea,Stack,TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../css/Signin.css';
import loginimg from '../assests/login.png';
import axios from "axios";
import {Link, useNavigate } from 'react-router-dom';

function Signin(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 
 
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/login", {
            email: email,
            password: password,
            }).then((res) =>
            {
             console.log(res.data);
            
             if (res.data.message === "email not exits")
             {
               alert("Email not exits");
             }
             else if(res.data.message === "Login Success")
             {
                
                navigate("/home");
             }
              else
             {
                alert("Incorrect email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }
 
         catch (err) {
          alert(err);
        }
      
      }

    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    return(
        <div className='signin'>
            <Card className='signincard'>
                <Stack direction={"row"}>
                    <Typography>
                       <CardActionArea>
                          <img src={loginimg} style={{height:'80vh'}} alt='e'/>
                       </CardActionArea>
                    </Typography>
                    <Typography className='formimage'>
                        <form>
                               <Typography>
                                   <p className='loginquote'> Start Your Journey Now! </p> 
                                </Typography>
                            <Stack direction={'column'} spacing={3}>
                              
                                <TextField className='logindetail' id="Email" 
                                value={email}
                                onChange={(event) => {
                                setEmail(event.target.value);
                                }} sx={{ width: '415px' }} label="Email" variant='outlined'/>

                                <FormControl className='logindetail'  sx={{ width: '415px' }} variant="outlined">
                                    <InputLabel > Password</InputLabel>
                                       <OutlinedInput id="password"  
                                       value={password}
                                       onChange={(event) => {
                                       setPassword(event.target.value);
                                       }}
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
                              <div>
                                 <Typography className='forgotpass'>
                                    <Link to="/forgot">Forgot password?</Link>
                                 </Typography>
                              </div>
                                <div>
                                  <button onClick={login} className='loginbutton'>LOGIN</button>
                                </div>
                                <div className='linklogin'>
                                    <Stack style={{marginLeft:"9%"}} direction={"row"} spacing={1}>
                                       <Typography>Don't have an Account?</Typography>
                                       <Typography><Link to="/signup">Create</Link></Typography>
                                    </Stack>
                                </div>
                              </Stack>
                        </form>
                    </Typography>
                </Stack>
            </Card>
        </div>
    );
}
export default Signin;