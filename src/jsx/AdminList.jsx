

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import React from 'react'

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LaptopIcon from '@mui/icons-material/Laptop';
import SaveIcon from '@mui/icons-material/Save';
import DevicesIcon from '@mui/icons-material/Devices';
import DomainIcon from '@mui/icons-material/Domain';
import CreateIcon from '@mui/icons-material/Create';

import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';


function AdminList(){
    
    const [open, setOpen] = React.useState(true);
    
    const handleClick = () => {
      setOpen(!open);
    };
    
        return (
           <div>
                  <List
      sx={{ width: '100%',height:"100vh", maxWidth: 270,color:"#212B36" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader sx={{backgroundColor:"#212B36",color:"whitesmoke"}} component="div" >
            <Typography sx={{height:"64px",paddingTop:"19px"}}>
                Overview
              
            </Typography>
            
        </ListSubheader>
        
      }
    >
        <Link style={{textDecoration:"none",color:"#212B36"}} to="/admindashboard">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon sx={{color:"#212B36"}}/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
        </Link>
        <Link style={{textDecoration:"none",color:"#212B36"}} to="/adminuser">
      <ListItemButton>
        <ListItemIcon>
          <PersonIcon sx={{color:"#212B36"}}/>
        </ListItemIcon>
        <ListItemText primary="User" />
      </ListItemButton>
      </Link>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <DomainIcon sx={{color:"#212B36"}}/>
        </ListItemIcon>
        <ListItemText primary="Brand" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <CreateIcon  sx={{color:"#212B36"}}/>
            </ListItemIcon>
            <ListItemText primary="Create Brand" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <DevicesIcon sx={{color:"#212B36"}}/>
            </ListItemIcon>
            <ListItemText primary="Manage Brand" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LaptopIcon sx={{color:"#212B36"}}/>
        </ListItemIcon>
        <ListItemText primary="Laptops" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link style={{textDecoration:"none",color:"#212B36"}} to="/adminpostlaptop">
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SaveIcon sx={{color:"#212B36"}}/>
            </ListItemIcon>
            <ListItemText primary="Post a Laptop" />
          </ListItemButton>
          </Link>
          <Link style={{textDecoration:"none",color:"#212B36"}} to="/adminmanagelaptop">
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <DevicesIcon sx={{color:"#212B36"}}/>
            </ListItemIcon>
            <ListItemText primary="Manage Laptops" />
          </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </List>
           </div>
        );

}
 
export default AdminList;