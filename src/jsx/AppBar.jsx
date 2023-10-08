import * as React from 'react';
import "../css/Appbar.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import IconButton from '@mui/material/IconButton';


import SearchIcon from '@mui/icons-material/Search';


import {InputBase, Menu, MenuItem, Paper, Stack, Tooltip} from '@mui/material';
import { Link } from 'react-router-dom';






const Brand = ['Hp', 'Acer', 'Asus', 'Lenovo','Mac'];
export default function ButtonAppBar() {
  
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorElUser1, setAnchorElUser1] = React.useState(null);

  const handleOpenUserMenu1 = (event) => {
    setAnchorElUser1(event.currentTarget);
  };

  const handleCloseUserMenu1 = () => {
    setAnchorElUser1(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#243238"}}>
        <Toolbar>
          <Stack direction={"row"} spacing={6.1}>

          <Typography  component="div" style={{mr: 5,marginTop:"1%",fontWeight:"500",fontFamily:"monospace"}}>
            <h3>LapCart</h3>
          </Typography>

          <Paper className="paper"
      component="form"
      sx={{ p: '2px 4px', display: 'flex',bgcolor:"whitesmoke",color:"black", alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search your dream laptops "
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        
      </IconButton>
    </Paper>

          
              <IconButton onClick={handleOpenUserMenu} sx={{color:"white",fontSize:"18px" }}>
                 Brand
              </IconButton>
          
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
              {Brand.map((Brand) => (
                <MenuItem key={Brand} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{Brand}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Typography>
              <Link to="/admin">
                  <button style={{color:"white",paddingTop:"15.5px",fontSize:"16.7px",border:"none",backgroundColor:"#243238"}} >
                     Admin
                  </button>
              </Link>
            </Typography>
            <Typography>
              <Link to="">
                  <button style={{color:"white",paddingTop:"15.5px",fontSize:"16.7px",border:"none",backgroundColor:"#243238"}} >
                     Add to cart
                  </button>
              </Link>
            </Typography>
            <Typography>
              <Link to="">
                  <button style={{color:"white",paddingTop:"15.5px",fontSize:"16.7px",border:"none",backgroundColor:"#243238"}} >
                     Wishlist
                  </button>
              </Link>
            </Typography>

       <Stack direction={"row"} spacing={0.5}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu1} sx={{color:"white" }}>
              <Typography style={{mr: 4,marginTop:"6%"}}>
               MyAccount  <ManageAccountsIcon/>
            </Typography>
                 
              </IconButton>
            </Tooltip>
            <Menu
                 sx={{ mt: '47px' }}
                 id="menu-appbar"
                 anchorEl={anchorElUser1}
                 anchorOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
                 }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser1)}
              onClose={handleCloseUserMenu1}
            >
              <MenuItem onClick={handleCloseUserMenu1}><Link to="/" style={{color:"black",textDecoration:"none"}}> Signin</Link></MenuItem>
              <MenuItem onClick={handleCloseUserMenu1}><Link to="/signup" style={{color:"black",textDecoration:"none"}}> Signup</Link></MenuItem>
              <MenuItem onClick={handleCloseUserMenu1}><Link to="/" style={{color:"black",textDecoration:"none"}}> Logout</Link></MenuItem>
              
            </Menu>
            </Stack>

          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}