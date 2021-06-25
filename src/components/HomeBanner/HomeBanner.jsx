import React from 'react';
import homeBannerData from '../../assets/data/home-banner';

const HomeBanner = () => {
    return (
        <>
            {homeBannerData.map((i) => (
                <img key={i.id} src={i.img} alt={i.title} />
            ))}
        </>
    );
};

export default HomeBanner;
