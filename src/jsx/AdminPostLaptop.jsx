import Adminpanel from "./Adminpanel";
import React, { useState } from 'react'
import AdminList from "./AdminList";
import "../css/AdminPostLaptop.css"
import {  Stack, TextField, Typography } from "@mui/material";
import axios from "axios";


function AdminPostLaptop(){
    const [modelid, setmodelid] = useState("");
    const [brandname, setbrandname] = useState("");
    const [modelname, setmodelname] = useState("");
    const[processor,setprocessor]=useState("");
    const[ssd,setssd]=useState("");
    const[ram,setram]=useState("");
    const [colour, setcolour] = useState("");
    const [price, setprice] = useState("");
    const [rating, setrating] = useState("");
    const [warranty, setwarranty] = useState("");
  
   
    async function handleSubmit(event)
     {
         event.preventDefault();
     try
         {
          await axios.post("http://localhost:8080/save ",
         {
            modelid:modelid,
            brandname:brandname,
            modelname:modelname,
            processor:processor,
            ssd:ssd,
            ram:ram,
            colour:colour,
            price:price,
            rating:rating,
            warranty:warranty,
         });
         alert("Laptop Post Successful");
  
         setmodelid("");
         setbrandname("");
         setmodelname("");
         setmodelname("");
         setprocessor("");
         setssd("");
         setram("");
         setcolour("");
         setprice("");
         setrating("");
         setwarranty("");

          
         }
     catch(err)
     {
       alert("Laptop Post Failed");
     }
    }
    return(
        <div>
            <Adminpanel/>
            <Stack direction={"row"}>
                 <AdminList/>
                 
                 <form onSubmit={handleSubmit} >
                    <div className="detail">
                    <Typography>
                    
                    <div className="postlap">

                        Post  Laptop
                        </div>
                        <hr></hr>
                 
                        <Stack direction={"column"} spacing={4}>
                            <Stack direction={"row"} spacing={3}>
                                <TextField sx={{width:"210px"}}  label="Modelid" variant="outlined" onChange={(event) =>{setmodelid(event.target.value);}} required/>
                                <TextField sx={{width:"210px"}}  label="Brandname" variant="outlined" onChange={(event) =>{setbrandname(event.target.value);}} required/>
                                <TextField sx={{width:"210px"}}  label="Modelname" variant="outlined" onChange={(event) =>{setmodelname(event.target.value);}} required/>
                                <TextField sx={{width:"210px"}}  label="Processor" variant="outlined" onChange={(event) =>{setprocessor(event.target.value);}} required/>
                            </Stack>
                            <Stack direction={"row"} spacing={3}>
                                <TextField sx={{width:"210px"}}  label="SSD" variant="outlined" onChange={(event) =>{setssd(event.target.value);}} required/>
                                <TextField sx={{width:"210px"}}  label="RAM" variant="outlined" onChange={(event) =>{setram(event.target.value);}} required/>
                                <TextField sx={{width:"210px"}}  label="Colour" variant="outlined" onChange={(event) =>{setcolour(event.target.value);}} required/>
                                <TextField sx={{width:"210px"}}  label="Price" variant="outlined" onChange={(event) =>{setprice(event.target.value);}} required/>
                            </Stack> 
                            <Stack direction={"row"} spacing={3}>
                                <TextField sx={{width:"210px"}}  label="Rating" variant="outlined" onChange={(event) =>{setrating(event.target.value);}} required/>
                                <TextField sx={{width:"210px"}}  label="Warranty" variant="outlined" onChange={(event) =>{setwarranty(event.target.value);}} required/>
                                <button className="postlaptopbut">POST LAPTOP</button>
                            </Stack>
                       </Stack>
                            <hr></hr>
                    </Typography>
                    </div>
                 </form>
            </Stack>
        </div>
    );
}
export default AdminPostLaptop;