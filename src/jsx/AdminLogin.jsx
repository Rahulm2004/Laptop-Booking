import { Card, Stack, TextField, Typography } from "@mui/material";
import "../css/AdminLogin.css";
import Adminimg from "../assests/Adminloginbg.png";
import React from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useNavigate} from 'react-router-dom';
function AdminLogin(){
    const navigate=useNavigate();
    function checkdata  (){

        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
         if(email===""){
            alert("please enter Email");
        }

        
        else if(password===""){
            alert("please enter password");
        }
        else if(email==="rahul2004@gmail.com"){
        
            if(password==="rahul@27")
            {
                navigate("/admindashboard")
            }
        }
        
     
        
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return(
       <div className="AdminloginBg">
           <Card className="AdminLogincard" sx={{width:"950px",height:"80vh",backgroundColor:"lightgray"}}>
              <Stack direction={"column"} spacing={1}>
                  <img className="Adminimg" style={{height:"40vh"}} src={Adminimg} alt="adminimg"/>
                   <Typography style={{fontSize:"0.7cm",fontWeight:550}}>
                          Admin
                   </Typography>
                <form>
                    <Stack direction={"column"} spacing={2.5}>
                        <TextField className='AdDetail' id="email"  sx={{ width: '415px' }} label="Email" variant='outlined'/>
                        
                        
                        <FormControl className='AdDetail'  sx={{ width: '415px' }} variant="outlined">
                                    <InputLabel > Password</InputLabel>
                                       <OutlinedInput id="password"
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
                                  <button onClick={checkdata} className='Adloginbutton'>LOGIN</button>
                                </div>

                    </Stack>

                </form>
              
              </Stack>
           </Card>
       </div>
    );
}
export default AdminLogin;