import React from 'react';
import Slider from 'react-slick';
// import styled from '@emotion/styled';
import HotelBanner from '../../components/HotelBanner/HotelBanner';
import Hotel from '../../templates/Hotel';
import { AboutContainer, FacilitiesHolder, SectionContainer, SectionTitleContainer } from './DetailComponent';

import royalData from '../../assets/data/royal-data';

import background from '../../assets/img/royal/royal-front.jpg';
import aboutBg from '../../assets/img/royal/royal-executive.jpg';
import fitnes from '../../assets/img/royal/royal-fitness.jpg';
import resto from '../../assets/img/royal/royal-restaurant.jpg';
import lobby from '../../assets/img/royal/royal-lobby.jpg';
import pool from '../../assets/img/royal/royal-pool.jpg';
import meeting from '../../assets/img/royal/royal-meeting-room.jpg';
import room from '../../assets/img/royal/royal-delux.jpg';
import ballrom from '../../assets/img/royal/royal-ballroom.jpg';

const title = 'Amaroossa Royal Bogor';

const RoyalFooter = () => {
    return (
        <div className="container pt-4">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-12 col-md-6 mb-3">
                    <h5>{title}</h5>
                    <p>Bogor Tengah, Jl. Otto Iskandardinata No.84, RT.04/RW.02, Baranangsiang, Kec. Bogor Tim., Kota Bogor, Jawa Barat 16143, Indonesia</p>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <h5>Contact Us</h5>
                    <p>+62 25-1835-4333</p>
                    <p><a href="https://api.whatsapp.com/send?phone=628111757815" target="_blank" rel="noopener noreferrer">+62 811-1757-815</a></p>
                    <p><a href="mailto:reservation.arb@amaroossahotel.com">reservation.arb@amaroossahotel.com</a></p>
                </div>
            </div>
        </div>
    );
};

class RoyalBogor extends React.Component {
    componentDidMount() {
        console.log('Amaroossa Royal Loaded');
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
            <Hotel booklink="https://www.bookandlink.com/booking/amaroossa-royal-bogor_1921.html" title={`${title} | Amaroossa Hotel`} footer={<RoyalFooter />}>
                <HotelBanner image={background} title={title} />
                {/* <SectionContainer>
                    <div className="container pb-5">
                        <SectionTitleContainer className="lines">
                            <h3>Our Facilites</h3>
                        </SectionTitleContainer>
                        <Slider {...facilitesSlider}>
                            {royalData.facilities.map((i, idx) => (
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
                                        <img src={`/${room}`} alt="Room" />
                                        <p>Room</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="el">
                                        <img src={`/${meeting}`} alt="Meeting Room" />
                                        <p>Meeting Room</p>
                                    </div>
                                </div>
                                {/* <div className="col-12">
                                    <div className="el">
                                        <img src={`/${ballrom}`} alt="Ball Rom" />
                                        <p>Ballrom</p>
                                    </div>
                                </div> */}
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="col-12">
                                    <div className="el xl">
                                        <img src={`/${lobby}`} alt="Lobby" />
                                        <p>Lobby</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="col-12">
                                    <div className="el">
                                        <img src={`/${resto}`} alt="Restaurant" />
                                        <p>Restaurant</p>
                                    </div>
                                </div>
                                {/* <div className="col-12">
                                    <div className="el">
                                        <img src={`/${fitnes}`} alt="Fitness" />
                                        <p>Fitness</p>
                                    </div>
                                </div> */}
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
                                    The Amaroossa Hotel Royal Bogor is the best 4-star hotel in Bogor, providing exceptional experiences for both business and leisure travelers. Located in a lovely area in the city center, the hotel enjoys a commanding position in the restaurant and shopping district and the family fun hub of Bogor. Guests can enjoy easy access to the Giant Botani Square, Suryakencana (Chinatown), Bogor Botanical Gardens, and everything that the lively city of Bogor has to offer.
                                </p>
                                <p>
                                    112 tastefully furnished bedrooms and fantastic facilities, including a fitness center, indoor swimming pool, massage service to help you unwind after an action-packed day in the city. Whatever your reason for your visit, the Amaroossa Hotel Royal Bogor is an excellent choice for your hotel stay in Bogor. Book now on the official website of Amaroossa.com
                                </p>
                            </div>
                        </div>
                    </div>
                </AboutContainer>
            </Hotel>
        );
    }
}

export default RoyalBogor;
