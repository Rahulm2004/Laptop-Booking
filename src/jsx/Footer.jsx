import { Card, Stack } from "@mui/material";
import Playstore from "../assests/googleplay.png";
import Appstore from "../assests/Appstore.png";
import youtube from "../assests/youtube.png";
import instagram from "../assests/instagram.jpg";
import facebook from "../assests/facebook.png";
import twitter from "../assests/twitter.png";
import linkedin from "../assests/linkedin.png";
import "../css/Footer.css";
function Footer(){
    return(
        <div>
            <Card style={{width:"1264.5px",height:"60vh",backgroundColor:"lightgrey"}}>
                <Stack direction={"row"} spacing={8}>
                  
                         <Stack direction={"column"} spacing={1}>
                                <p>
                                   <b>ABOUT US</b>
                                </p>
                                <p className="FooterAboutUs">
                                    We guarantee the highest quality of the products we sell.
                                    Several decades of successful operation and
                                    millions of happy customers let us feel certain 
                                    about that. Besides, all items we sell pass
                                    thorough quality control, so no characteristics
                                    mismatch can escape the eye of our professionals.
                                </p> 
                         </Stack>
                         
                    
                         <Stack direction={"column"} spacing={0}>
                            <p>
                                <b>INFORMATION</b>
                            </p>
                            <div className="FooterInformation">
                               <p>About Us</p>
                               <p>Contact Us</p>
                               <p>Privacy Policy</p>
                               <p>Customer Service</p>
                               <p>Terms of Use</p>

                            </div>
                         </Stack>
                         
                         <Stack direction={"column"} spacing={1}>
                            <p>
                                <b>WHY BUY FROM US</b>
                            </p>
                            <p>Shipping & Delievery</p>
                            <p>Secure Payment</p>
                            <p>Support</p>
                            <p>Guarantee</p>
                            <p>Terms & Conditions</p>
                         </Stack>
                         
                         <Stack direction={"column"} spacing={1}>
                            <p>
                                <b>EXPERIENCE LAPCART APP ON MOBILE</b>
                            </p>
                            <Stack direction={"row"} spacing={2}>
                                 <img style={{width:"105px"}} src={Playstore} alt="play"/>
                                 <img style={{width:"105px"}} src={Appstore} alt="app"/>
                            </Stack>

                            <p>
                                <b>CONNECT WITH US</b>
                            </p>
                            <Stack direction={"row"} spacing={2}>
                                 <img style={{width:"30px"}}  src={instagram} alt="instagram"/>
                                 <img style={{width:"30px"}}  src={facebook} alt="facebook"/>
                                 <img style={{width:"30px"}}  src={youtube} alt="youtube"/>
                                 <img style={{width:"30px"}}  src={twitter} alt="twitter"/>
                                 <img style={{width:"30px"}}  src={linkedin} alt="linkedin"/>
                            </Stack>
                        </Stack>
                        <Stack direction={"column"} spacing={1}>
                                <p>
                                   <b>CONTACT US</b>
                                </p>
                                <p >
                                  LapCart Internet Private Limited,
                                  Buildings Prime Plaza,
                                  Race Course,
                                  Coimbatore, 641018,
                                  Tamilnadu, India
                                  CIN : T1356OP96124GLC092456
                                  Telephone: 044-48749326
                                </p> 
                        </Stack>
                </Stack>
            </Card>
        </div>
    );
}
export default Footer;