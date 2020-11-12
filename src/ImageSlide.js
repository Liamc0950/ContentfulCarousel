import React from 'react';
import styles from './imageSlide.module.css'


function ImageSlide(props){
    let imgStyles = {
        backgroundImage: `url(${props.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: 100 + "%",
        height: 100 + "%",
    }

    return(
        <div style={imgStyles}>
            <div className={styles.spacerTop}></div>
            <div className={styles.captions}>
                <div className={styles.showTitle}>{props.title}</div>
                <div className={styles.showPosition}>{props.position}</div>
            </div>
        </div>
    );
}

export default ImageSlide;