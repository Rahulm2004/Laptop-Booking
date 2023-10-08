import { Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
function AdminUpdateLaptop(){
    const {modelid}=useParams();
   
    const [values,setValues]=useState({
        modelid:modelid,
        brandname:"",
        modelname:"",
        processor:"",        
        ssd:"",        
        ram:"",        
        colour:"",        
        price:"",        
        rating:"",        
        warranty:"",        
            
    })
    useEffect(()=>{
        axios.get('http://localhost:8080/lapdetail/'+modelid)
        .then(res=>{
            
            setValues({...values,modelid: res.data.modelid,
               brandname: res.data.brandname,
               modelname: res.data.modelname,
               processor: res.data.processor,
                ssd: res.data.ssd,
               ram: res.data.ram,
                colour: res.data.colour,
                price: res.data.price,
                rating: res.data.rating,
                warranty: res.data.warranty  
            })
        })
        .catch(err => console.log(err))
    },[])
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault();
      
        axios.put('http://localhost:8080/update/'+modelid,values)
        .then(res=>{
            console.log(res)
            navigate('/adminmanagelaptop');
        })
        .catch(err => console.log(err))
    } 
    return(
           <div>
            <form onSubmit={handleSubmit}>
                    <div >
                    <Typography>
                        <div>
                         Update  Laptop
                        </div>
                        <hr></hr>
                
                        <Stack direction={"column"} spacing={4}>
                            <Stack direction={"row"} spacing={3}>
                                <TextField sx={{width:"210px"}}  label="Modelid" variant="outlined" value={values.modelid} onChange={e => setValues({...values,modelid: e.target.value})}/>
                                <TextField sx={{width:"210px"}}  label="Brandname" variant="outlined" value={values.brandname} onChange={e => setValues({...values,brandname: e.target.value})} />
                                <TextField sx={{width:"210px"}}  label="Modelname" variant="outlined" value={values.modelname} onChange={e => setValues({...values,modelname: e.target.value})} />
                                <TextField sx={{width:"210px"}}  label="Processor" variant="outlined" value={values.processor} onChange={e => setValues({...values,processor: e.target.value})} />
                            </Stack>
                            <Stack direction={"row"} spacing={3}>
                                <TextField sx={{width:"210px"}}  label="SSD" variant="outlined" value={values.ssd} onChange={e => setValues({...values,ssd: e.target.value})} />
                                <TextField sx={{width:"210px"}}  label="RAM" variant="outlined" value={values.ram} onChange={e => setValues({...values,ram: e.target.value})} />
                                <TextField sx={{width:"210px"}}  label="Colour" variant="outlined" value={values.colour} onChange={e => setValues({...values,colour: e.target.value})} />
                                <TextField sx={{width:"210px"}}  label="Price" variant="outlined" value={values.price} onChange={e => setValues({...values,price: e.target.value})} />
                            </Stack> 
                            <Stack direction={"row"} spacing={3}>
                                <TextField sx={{width:"210px"}}  label="Rating" variant="outlined" value={values.rating} onChange={e => setValues({...values,rating: e.target.value})} />
                                <TextField sx={{width:"210px"}}  label="Warranty" variant="outlined" value={values.warranty} onChange={e => setValues({...values,warranty: e.target.value})} />
                                <button>UPDATE LAPTOP</button>
                            </Stack>
                       </Stack>
                            <hr></hr>
                    </Typography>
                    </div>
                 </form>
         
           
           </div>
         
    )
    
}
export default AdminUpdateLaptop;