import React from 'react';
import Slider from 'react-slick';
// import styled from '@emotion/styled';
import HotelBanner from '../../components/HotelBanner/HotelBanner';
import Hotel from '../../templates/Hotel';
import { AboutContainer, FacilitiesHolder, SectionContainer, SectionTitleContainer } from './DetailComponent';
import grandeData from '../../assets/data/grande-data';

import background from '../../assets/img/grande/grande-banner-1.jpg';
import aboutBg from '../../assets/img/grande/executive-twinbed.jpg';

import fitnes from '../../assets/img/grande/grande-fitness.jpg';
import meeting from '../../assets/img/grande/grande-meeting-room.jpg';
import lobby from '../../assets/img/grande/grande-lobby.jpg';
import pool from '../../assets/img/grande/grande-pool.jpg';
import front from '../../assets/img/grande/grande-front.jpg';

const title = 'Amaroossa Grande Bekasi';

const GrandeFooter = () => {
    return (
        <div className="container pt-4">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-12 col-md-6 mb-3">
                    <h5>{title}</h5>
                    <p>Jl. Jend.Ahmad Yani No.88. Bekasi Selatan 17141 - Indonesia.</p>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <h5>Contact Us</h5>
                    <p><a href="tel:+622122100000">+62 21-2210-0000</a></p>
                    <p><a href="https://api.whatsapp.com/send?phone=6282123466991" target="_blank" rel="noopener noreferrer">+62 821-2346-6991</a></p>
                    <p><a href="mailto:grandebekasi@amaroossahotel.com">grandebekasi@amaroossahotel.com</a></p>
                </div>
            </div>
        </div>
    );
};

class GrandeBekasi extends React.Component {
    componentDidMount() {
        console.log('Amaroossa Grande Loaded');
    }

    render() {
        const facilitesSlider = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 250,
            slidesToShow: 2,
            slidesToScroll: 1
        };

        return (
            <Hotel booklink="https://www.bookandlink.com/booking/amaroossa-grande-bekasi_1920.html" title={`${title} | Amaroossa Hotel`} footer={<GrandeFooter />}>
                <HotelBanner image={background} title={title} />
                {/* <SectionContainer>
                    <div className="container pb-5">
                        <SectionTitleContainer className="lines">
                            <h3>Our Facilites</h3>
                        </SectionTitleContainer>
                        <Slider {...facilitesSlider}>
                            {grandeData.facilities.map((i, idx) => (
                                <FacilitiesHolder key={idx}>
                                    <img src={`/${i.img}`} alt={i.name} />
                                    <h4>{i.name}</h4>
                                </FacilitiesHolder>
                            ))}
                        </Slider>
                    </div>
                </SectionContainer> */}
                <SectionContainer id="our-hotels">
                    <div className="container-fluid">
                        <SectionTitleContainer className="lines">
                            <h3>Our Facilities</h3>
                        </SectionTitleContainer>
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="col-12">
                                    <div className="el">
                                        <img src={`/${lobby}`} alt="Lobby" />
                                        <p>Lobby</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="el">
                                        <img src={`/${meeting}`} alt="Meeting Room" />
                                        <p>Meeting Room</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="col-12">
                                    <div className="el xl">
                                        <img src={`/${front}`} alt="Restaurant" />
                                        <p>Our</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="col-12">
                                    <div className="el">
                                        <img src={`/${fitnes}`} alt="Fitnes" />
                                        <p>Fitness</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="el">
                                        <img src={`/${pool}`} alt="Swimming Pool" />
                                        <p>Swimming Pool</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
                <AboutContainer style={{ backgroundImage: `url(/${aboutBg})` }}>
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-6">
                                <div className="text-center">
                                    <h2>about us</h2>
                                    <p>{title}</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h5>Welcome to Amaroossa Grande Bekasi</h5>
                                <p>
                                    With a convenient location in Jalan Jenderal Ahmad Yani in the heart of Bekasi, the Amaroossa Hotel Grande Bekasi is the perfect starting point for guests wishing to explore the city or for business travelers attending meetings. A strategic location near all of the major attractions in the city also make it the number one choice for family breaks.
                                </p>
                                <p>
                                    Our 4-star boutique hotel in the center of Bekasi creates unforgettable hotel experiences for all of our guests. Relax in the comfort of one of our 159 elegant and attractive rooms, and take full advantage of our modern boutique hotel facilities, spectacular dining experiences, and first-class service. Book your stay now on the official website of Amaroossa Hotels to get the guaranteed lowest online rates.
                                </p>
                            </div>
                        </div>
                    </div>
                </AboutContainer>
            </Hotel>
        );
    }
}

export default GrandeBekasi;
