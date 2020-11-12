import React,{useState} from 'react';
import styles from './slider.module.css'
import ImageSlide from './ImageSlide';
import i1 from "./img/cabaret_1.jpg";
import i2 from "./img/Mei_Lin_Barral_Photography_Boston_Opera_del_West_Cendrillon_216.jpg";
import i3 from "./img/OCG__1.jpg";

function Slider(props){

    let chevStyles = {
        fontSize: 1.8 + "vw",
        color: "white"
    }



    //Array of components
    let sliderArr = [<ImageSlide src={i1} title="Cabaret" position="Lighting Design"></ImageSlide>, 
                     <ImageSlide src={i2} title="Cabaret" position="Lighting Design"></ImageSlide>, 
                     <ImageSlide src={i3} title="Cabaret" position="Lighting Design"></ImageSlide>];

    const [x, setX] = useState(0);
    const goLeft = () =>{
        (x===0)?setX((-100 * (sliderArr.length-1))):setX(x+100);
    };
    const goRight = () =>{
        (x===(-100 * (sliderArr.length-1)))?setX(0):setX(x-100);
    };

    return(
        <div className={styles.slider}>
            {
                sliderArr.map((item,index)=>{
                    return(
                        <div key={index} className={styles.slide} style={{ transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            <button id="goLeft" className={styles.button} onClick={goLeft}>
                <i className="fa fa-chevron-left" style={chevStyles}></i>
            </button>
            <button id="goRight" className={styles.button} onClick={goRight}>
                <i className="fa fa-chevron-right" style={chevStyles}></i>
            </button>
        </div>
    )
}

export default Slider;