import React from 'react';

const GalleryItem = ({ text }) => {
    return (
        <button className="flex-1 p-8 h-1/4 bg-gray-200 hover:bg-black hover:text-white transition-all duration-300">{text}</button>
    );
}

export default GalleryItem;