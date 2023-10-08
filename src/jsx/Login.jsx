import '../css/Login.css';
import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {Link, Stack } from '@mui/material';
import loginimg from '../assests/logimg1.webp';




function Login (){
   
 

        function checkdata  (){
        

        
            let username=document.getElementById("username").value;
            let password=document.getElementById("password").value;
            
           
             if(username===""){
                alert("please enter username");
            }
            
            else if(password===""){
                alert("please enter password");
            }
            
            else{
                alert("hello")
            }
        }
       

        return (
            
            <div className='bc'>
                <div>

               <Card id="cardsize">
                <Stack direction={"row"} spacing={20}>

                <Typography id="logininput">
               
                    <CardActions>

                        <img id="limg" src={loginimg} alt="e" />

                    </CardActions>
                

                </Typography>
                <Typography id="logininput">
                    <form id="loginform">

                        <Stack direction={"column"} spacing={4}>

                        <Typography id="logquote">Good To See You Again</Typography>
                        <TextField 
                           id="username"
                            label="Username"
                            type="text"
                            autoComplete="current-password"
                        />
                        <TextField 
                           id="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                      
                      
                        <button onClick={checkdata} id="logbut" type="button" class="btn btn-secondary">LOGIN</button><br></br>

                        </Stack>

                    </form>
                    <Typography>
                    <Stack direction={"row"} spacing={5}>

                        <Typography><Link to="">Don't have an account?</Link></Typography>
                        <Typography><Link>Forget password?</Link></Typography>

                    </Stack>

                    </Typography>
                </Typography>
                </Stack>
               </Card>
            </div>
                </div>
        );
    
}
 
export default Login;