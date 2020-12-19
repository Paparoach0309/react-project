import React, {useState} from 'react';
import Images from './Sliders/Images.jsx';
import '../styles/gallery.css';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(Images[0]);

    return(
        <div className='container'>
            <img src={selectedImg} alt="" className='selected'/>
            <div className='imageСontainer'>
                {Images.map((img, index) => (
                    <img 
                    style={{border: selectedImg === img ? '4px solid blue' : ''}}
                    key={index} 
                    src={img} 
                    alt='#'
                    onClick={() => setSelectedImg(img)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Gallery;