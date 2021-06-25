import React from 'react';
import Slider from 'react-slick';
// import styled from '@emotion/styled';
import HotelBanner from '../../components/HotelBanner/HotelBanner';
import Hotel from '../../templates/Hotel';
import { AboutContainer, FacilitiesHolder, SectionContainer, SectionTitleContainer } from './DetailComponent';

import cosmoData from '../../assets/data/cosmo-data';

import background from '../../assets/img/cosmo/Executive.jpg';
import aboutBg from '../../assets/img/cosmo/Delux.jpg';
import fitnes from '../../assets/img/cosmo/cosmo-fitnes.jpg';
import room from '../../assets/img/cosmo/cosmo-executive.jpg';
import resto from '../../assets/img/cosmo/cosmo-restaurant.jpg';
import meeting from '../../assets/img/cosmo/cosmo-meeting-room2.jpg';
import lobby from '../../assets/img/cosmo/cosmo-lobby.jpg';
import pool from '../../assets/img/cosmo/cosmo-pool-1.jpg';
import bellLounge from '../../assets/img/cosmo/cosmo-bell-lounge.jpg';
import front from '../../assets/img/cosmo/cosmo-front2.jpg';

const title = 'Cosmo Amaroossa Jakarta';

const CosmoFooter = () => {
    return (
        <div className="container pt-4">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-12 col-md-6 mb-3">
                    <h5>{title}</h5>
                    <p>Jl. Pangeran Antasari No.9, RT.3/RW.6, Cipete Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12410, Indonesia</p>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <h5>Contact Us</h5>
                    <p>+62 21-7591-8800</p>
                    <p><a href="https://api.whatsapp.com/send?phone=6285945862052" target="_blank" rel="noopener noreferrer">+62 859-4586-2052</a></p>
                    <p><a href="mailto:reservation.caj@amaroossahotel.com">reservation.caj@amaroossahotel.com</a></p>
                </div>
            </div>
        </div>
    );
};

class CosmoJakarta extends React.Component {
    componentDidMount() {
        console.log('Amaroossa Cosmo Loaded');
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
            <Hotel booklink="https://www.bookandlink.com/booking/amaroossa-cosmo-jakarta-_1924.html" title={`${title} | Amaroossa Hotel`} footer={<CosmoFooter />}>
                <HotelBanner image={background} title={title} />
                {/* <SectionContainer>
                    <div className="container pb-5">
                        <SectionTitleContainer className="lines">
                            <h3>Our Facilites</h3>
                        </SectionTitleContainer>
                        <Slider {...facilitesSlider}>
                            {cosmoData.facilities.map((i, idx) => (
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
                                {/* <div className="col-12">
                                    <div className="el">
                                        <img src={`/${lobby}`} alt="Lobby" />
                                        <p>Lobby</p>
                                    </div>
                                </div> */}
                                <div className="col-12">
                                    <div className="el">
                                        <img src={`/${room}`} alt="Room" />
                                        <p>Room</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="el">
                                        <img src={`/${meeting}`} alt="Meeting Room" />
                                        <p>Meeting</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="col-12">
                                    <div className="el xl">
                                        <img src={`/${front}`} alt="Restaurant" />
                                        <p>Front</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="col-12">
                                    <div className="el">
                                        <img src={`/${bellLounge}`} alt="Bell Lounge" />
                                        <p>Bell Lounge</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="el">
                                        <img src={`/${pool}`} alt="Swimming Pool" />
                                        <p>Swimming Pool</p>
                                    </div>
                                </div>
                                {/* <div className="col-12">
                                    <div className="el">
                                        <img src={`/${fitnes}`} alt="Fitnes" />
                                        <p>Fitness</p>
                                    </div>
                                </div> */}
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
                                <h5>Discover Luxury with the best view</h5>
                                <p>
                                    The 4-star Amaroossa Hotel Cosmo Jakarta provides 98 comfortable and elegantly-designed guest rooms in a strategic location in the south of Jakarta, near numerous shopping malls and leisure facilities, and only a 40-minute drive from Jakarta Soekarno Hatta Airport.
                                </p>
                                <p>
                                    Book a room in this boutique hotel in Jakarta and enjoy an exceptional experience designed for both business and leisure travelers. Modern facilities, spacious rooms, delicious dining experiences, and superior quality service. Book your stay now at the lowest online rates on the official website of Amaroossa Hotels.
                                </p>
                            </div>
                        </div>
                    </div>
                </AboutContainer>
            </Hotel>
        );
    }
}

export default CosmoJakarta;
