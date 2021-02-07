import React from 'react';
import './LaunchImageItem.css';
import LazyImage from  '../../UI/LazyImage/LazyImage';

const LaunchImage=({source,name})=>{
    return(
        <figure className="figure-item">
    <LazyImage src={source} alt={name}/>
    </figure>

    )
}

export default LaunchImage;