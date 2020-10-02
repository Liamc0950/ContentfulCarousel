import React from 'react';


function ImageSlide( {src}){
    // let imgStyles = {
    //     width: 100 + "%",
    //     height: 100 + "%",
    // }
    // return <img src={src} alt="slide-img" style={imgStyles}></img>

    let imgStyles = {
        backgroundImage: `url(${src})`,
        width: 100 + "%",
        height: 100 + "%",
    }

    return <div style={imgStyles}></div>
}

export default ImageSlide;