import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    return (
        <div>
            <h1>This is Gallery Page</h1>
            {
                [1, 2, 3, 4]?.map(img => (
                    <Image key={img} src={`/images/${img}.jpg`} alt="" height='1080' width='1920' />
                ))
            }
            {/* <Image src="/images/slide1.jpg" alt="" height='1080' width='1920'/> */}
        </div>
    );
};

export default GalleryPage;