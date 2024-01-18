import React from 'react';

const Image = ({ image }) => {
    console.log(image)
    return (
        <div className='image'>
            <img
                src={image.urls.regular}
                alt={image.alt_description}
            />
        </div>
    );
};

export default Image;