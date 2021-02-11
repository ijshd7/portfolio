import React from 'react';
import GalleryItem from './galleryItem';

const ProjectGallery =() => {
    return (
        <div className="w-full h-screen flex flex-wrap">
            <GalleryItem text="Item 1" />
            <GalleryItem text="Item 2" />
            <GalleryItem text="Item 3" />
            <GalleryItem text="Item 4" />
            <GalleryItem text="Item 5" />
        </div>
    );
}

export default ProjectGallery;