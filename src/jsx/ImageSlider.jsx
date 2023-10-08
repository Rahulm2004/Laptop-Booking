import { useState } from "react";
import "../css/ImageSlider.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ImageSlider =({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: "realtive",

    };

    const slideStyles ={
        width: "100%",
        height: "100%",
        position:"relative",
       
        
        backgroundPosition: "center",
        backgroundSize: "cover",                              
        backgroundImage : `url(${slides[currentIndex].url})`,
    };

    const leftArrowStyles = {
        position: "absolute",
        top: "280px",
        transform: "translate(0, -50%)",
        left: "80px",
        fontSize: "45px",
        color: "#000",
        zIndex: 1,
        cursor: "pointer",  
    }
    const rightArrowStyles = {
        position: "absolute",
        top: "280px",
        transform: "translate(0, -50%)",
        backgroundcolor:"red",               
        right: "80px",
        fontSize: "45px",
        color: "#000",
        zIndex: 1,
        cursor: "pointer",  
    }

    const dotsContainerStyles = {
        display :"flex",
        justifyContent: "center",
    };
    const dotStyles = {
        
        margin:"50px 3px",
        cursor:"pointer",
        
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const  newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1 ;
        const  newIndex = isLastSlide ? 0: currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    };
    

    return(
        <div style={ sliderStyles }>
            <div style={leftArrowStyles} onClick={goToPrevious} className="leftarr"><ArrowBackIosIcon/></div>
            <div style={rightArrowStyles} onClick={goToNext} className="rightarr"><ArrowForwardIosIcon/></div>
            <div style={ slideStyles }> </div>
            <div style={dotsContainerStyles}>
                {slides.map((slide,slideIndex) => (
                    <div className="dotcl" key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>●</div>
                ))}
            </div>  
        </div>
    ) 
};

export default ImageSlider;