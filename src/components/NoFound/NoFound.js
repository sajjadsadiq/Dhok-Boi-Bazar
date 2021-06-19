import React from 'react';
import images from '../../fakeData/images/noFound.svg'

const NoFound = () => {
    return (
        <div>
           <img src={images} alt=""/>
        </div>
    );
};

export default NoFound;