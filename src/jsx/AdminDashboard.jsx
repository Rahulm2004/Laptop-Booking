import React from 'react'
import "../css/AdminDashboard.css"; 
import { Card, Stack, Typography } from '@mui/material';
import Adminpanel from './Adminpanel';
import AdminList from './AdminList';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function AdminDashboard(){
    const [totaluser,setuserid]=useState("");
    useEffect(() => {
        axios.get('http://localhost:8080/getuser')
            .then(response => {
                // get total user count
                setuserid(response.data.length)
                // get total number of users
                let count = 0;
                for (let i = 0; i < response.data.length; i++) {
                    count += response.data[i].userid;
                }
                setuserid(count);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    return(
        <div>
               <Adminpanel/>
      <Stack direction={"row"}>
         
       <AdminList/>
      
     
        <div className='alligncard'>
        <Stack direction={"row"} spacing={4}>
            <Card style={{width:"200px",height:"200px",backgroundColor:"#D1E9FC",borderRadius:"0.5cm",marginTop:'3cm',marginLeft:"1cm"}}>
            <Typography style={{fontsize:"1cm",marginTop:"2cm"}}><b>Brand</b></Typography>
                <div>{totaluser}</div>

            </Card>
            <Card style={{width:"200px",height:"200px",backgroundColor:"#D0F2FF",borderRadius:"0.5cm",marginTop:'3cm'}}>
                <Typography style={{fontsize:"1cm",marginTop:"2cm"}}><b>Post Brand</b></Typography>
            </Card>
            <Card style={{width:"200px",height:"200px",backgroundColor:"#FFF7CD",borderRadius:"0.5cm",marginTop:'3cm'}}>
                <Typography style={{fontsize:"1cm",marginTop:"2cm"}}><b>Post Laptops</b></Typography>
            </Card>
            <Card style={{width:"200px",height:"200px",backgroundColor:"#FFE7D9",borderRadius:"0.5cm",marginTop:'3cm'}}>
                 <Typography style={{fontsize:"10px",marginTop:"2cm"}}><b>Manage Laptop</b></Typography>
            </Card>
        </Stack>
        </div>
     </Stack>
      </div>
    );
}
export default AdminDashboard;