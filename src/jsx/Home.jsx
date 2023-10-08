
import "../css/Home.css";
import AppBar from "../jsx/AppBar";
// import Asus from "../assests/Asus.jpg";
import headphone from "../assests/headphone.jpg";
import tablet from "../assests/Tablets.jpg";
import Asusbrand from "../assests/Asusbrand.jpg";
import Acerbrand from "../assests/Acerbrand.jpg";
import Hpbrand from "../assests/Hpbrand.jpg";
import Lenovobrand from "../assests/Lenovobrand.jpg";
import {  Stack, Typography } from "@mui/material";
import ImageSlider from "../jsx/ImageSlider";
import Footer from "../jsx/Footer";
// import Hp from "../assests/Hp.jpg";
// import Lenovo from "../assests/Lenovo.jpg";
// import Mac from "../assests/Mac.jpg";


function Home(){
    const slides =[
      
        {url: "https://assets.tatacliq.com/medias/sys_master/images/32891512029214.jpg", title: "Lenovo"},
        {url: "https://assets.tatacliq.com/medias/sys_master/images/33905575919646.jpg", title: "Asus"},
        {url: "https://assets.tatacliq.com/medias/sys_master/images/33905575919646.jpg", title: "intel"},
        {url: "https://assets.tatacliq.com/medias/sys_master/images/31029261008926.jpg", title: "Mac"},
        {url: "https://assets.tatacliq.com/medias/sys_master/images/33369205833758.jpg", title: "LG"},
        {url: "https://assets.tatacliq.com/medias/sys_master/images/33099493048350.jpg", title: "Hp"},
        {url: "https://assets.tatacliq.com/medias/sys_master/images/32426907664414.jpg", title: "Rog"},
    ];
    
    const containerStyles = {
        
        width: "1264.5px",
        height: "405px",
        
    };
    return(
        <div>
            
               <AppBar/>
        
             
            <div style={containerStyles} className="maps12">
            <ImageSlider slides={slides}/>
            </div>
            <Typography style={{font:"caption",fontSize:"0.7cm",fontFamily:"monospace",marginTop:"1.6cm"}} className="learningkit">
                SHOP BY BRAND
            </Typography>
            <Typography>
                    <hr></hr>
            </Typography>

            <div className="Shopbybrandmargin">
                <Stack direction={"row"} spacing={3}>
                    <img style={{width:"220px",height:"300px"}} src={Asusbrand} alt="Asus"/>
                    <img style={{width:"220px",height:"300px"}} src={Hpbrand} alt="Asus"/>
                    <img style={{width:"220px",height:"300px"}} src={Acerbrand} alt="Asus"/>
                    <img style={{width:"220px",height:"300px"}} src={Lenovobrand} alt="Asus"/>
                </Stack>
            </div>


            <Typography style={{font:"caption",fontSize:"0.7cm",fontFamily:"monospace",marginTop:"1.3cm"}} className="learningkit">
                YOUR LEARNING KIT
            </Typography>
            <Typography>
                    <hr></hr>
            </Typography>
            <div className="learningkitmargin">
                <Stack direction={"row"} spacing={3}>
                    <img style={{width:"470px",height:"300px"}} src={headphone} alt="headphone"/>
                    <img style={{width:"470px",height:"300px"}} src={tablet} alt="tablet"/>
                </Stack>
            </div>
            <div className="footer">
               <Footer/>
           </div>
    
       
            
        </div>
    );
}
export default Home;
