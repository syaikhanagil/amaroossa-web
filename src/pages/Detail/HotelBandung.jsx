import React from 'react';
import Slider from 'react-slick';
// import styled from '@emotion/styled';
import HotelBanner from '../../components/HotelBanner/HotelBanner';
import Hotel from '../../templates/Hotel';
import { AboutContainer, FacilitiesHolder, SectionContainer, SectionTitleContainer } from './DetailComponent';

import bandungData from '../../assets/data/bandung-data';

import background from '../../assets/img/bandung/bandung-front.jpg';
import aboutBg from '../../assets/img/bandung/bandung-junior-suite.jpg';
import fitnes from '../../assets/img/bandung/bandung-fitness.jpg';
import resto from '../../assets/img/bandung/bandung-resto.jpg';
import lobby from '../../assets/img/bandung/bandung-lobby.jpg';
import pool from '../../assets/img/bandung/bandung-pool.jpg';
import bar from '../../assets/img/bandung/bandung-bar.jpg';

const title = 'Amaroossa Hotel Bandung';

const BandungFooter = () => {
    return (
        <div className="container pt-4">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-12 col-md-6 mb-3">
                    <h5>{title}</h5>
                    <p>Jl. Aceh No.71 A, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115, Indonesia.</p>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <h5>Contact Us</h5>
                    <p>+62 22-422-2221</p>
                    <p><a href="https://api.whatsapp.com/send?phone=6281294025520" target="_blank" rel="noopener noreferrer">+62 812-9402-5520</a></p>
                    <p><a href="mailto:resv@amaroossahotel.com">resv@amaroossahotel.com</a></p>
                </div>
            </div>
        </div>
    );
};

class HotelBandung extends React.Component {
    componentDidMount() {
        console.log('Amaroossa Bandung Loaded');
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
            <Hotel booklink="https://www.bookandlink.com/booking/the-amaroossa-hotel-bandung_1925.html" title={`${title} | Amaroossa Hotel`} footer={<BandungFooter />}>
                <HotelBanner image={background} title={title} />
                {/* <SectionContainer>
                    <div className="container pb-5">
                        <SectionTitleContainer className="lines">
                            <h3>Our Facilites</h3>
                        </SectionTitleContainer>
                        <Slider {...facilitesSlider}>
                            {bandungData.facilities.map((i, idx) => (
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
                                        <img src={`/${fitnes}`} alt="Fitnes" />
                                        <p>Fitness</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="col-12">
                                    <div className="el xl">
                                        <img src={`/${resto}`} alt="Restaurant" />
                                        <p>Restaurant</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="col-12">
                                    <div className="el">
                                        <img src={`/${bar}`} alt="Bell Lounge" />
                                        <p>Vlindor Bar</p>
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
                            <div className="col-md-4">
                                <div className="text-center">
                                    <h2>about us</h2>
                                    <p>{title}</p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h5>Discover Luxury with the best view</h5>
                                <p>
                                    The Amaroossa Hotel Bandung is an upper-end 4-star boutique hotel carefully designed to provide guests with exceptional experiences at surprisingly low rates, making it the perfect choice for anyone wishing to make their hotel stay in Bandung a very special and memorable experience.
                                </p>
                                <p>
                                    The hotel features a collection of 92 comfortable hotel rooms with stunning interior design divided into four different types (Deluxe, Executive, Junior Suite, and Presidential Suite), as well as a range.
                                </p>
                            </div>
                        </div>
                    </div>
                </AboutContainer>
            </Hotel>
        );
    }
}

export default HotelBandung;
