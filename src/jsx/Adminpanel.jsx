import "../css/Adminpanel.css";
import AppBar from '@mui/material/AppBar';
import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
// import lapkartlogo from "../assests/LapKart logo.png"
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from "react-router-dom";





function Adminpanel(){

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



    return(
        <div>
             <AppBar style={{backgroundColor:"#212B36",position:"absolute"}} position="static">
                <Toolbar>
                  <IconButton
                     size="large"
                     edge="start"
                     color="inherit"
                     aria-label="menu"
                     sx={{ mr: 2 }}
                  >
           
            </IconButton>
           
              
            <Typography  component="div" sx={{ flexGrow: 1,fontWeight:"400",fontSize:"larger"}}>
                Lapkart
            </Typography>

        
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{color:"white" }}>
                 <ManageAccountsIcon/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
           
               
              <MenuItem onClick={handleCloseUserMenu}><Link to="/home" style={{color:"black",textDecoration:"none"}}> Logout</Link></MenuItem>
              <MenuItem onClick={handleCloseUserMenu}><Link to="" style={{color:"black",textDecoration:"none"}}> Change password</Link></MenuItem>
              <MenuItem onClick={handleCloseUserMenu}><Link to="" style={{color:"black",textDecoration:"none"}}> DashBoard</Link></MenuItem>
            
  
         
            </Menu>
        </Toolbar>
      </AppBar>
    
    
        </div>
    );
}
export default Adminpanel;