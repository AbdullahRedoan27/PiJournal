import React from 'react';
import banner from '../../../images/Banner.png';
const Banner = () => {
    return (
        <div>
            <img className='rounded-xl mx-auto' src={banner} alt='banner'></img>
        </div>
    );
};

export default Banner;