import React from 'react';
import Slider from 'react-slick';
// import styled from '@emotion/styled';
import HotelBanner from '../../components/HotelBanner/HotelBanner';
import Hotel from '../../templates/Hotel';
import { AboutContainer, FacilitiesHolder, SectionContainer, SectionTitleContainer } from './DetailComponent';

import littleData from '../../assets/data/little-data';

import background from '../../assets/img/little/little-front.jpg';
import aboutBg from '../../assets/img/little/little-delux.jpg';
import kitchen from '../../assets/img/little/little-kitchen.jpg';
import room from '../../assets/img/little/little-room.jpg';
// import delux from '../../assets/img/little/little-delux.jpg';
import lobby from '../../assets/img/little/little-lobby.jpg';
import omaFunction from '../../assets/img/little/little-function.jpg';
import meeting from '../../assets/img/little/little-meeting-room.jpg';

const title = 'Little Amaroossa Jakarta';

const LittleFooter = () => {
    return (
        <div className="container pt-4">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-12 col-md-6 mb-3">
                    <h5>{title}</h5>
                    <p>Jl. Cipete Raya, No. 5, Cilandak - Jakarta Selatan 12410</p>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <h5>Contact Us</h5>
                    <p>+62 21-2912-4555</p>
                    <p><a href="https://api.whatsapp.com/send?phone=6281282035755" target="_blank" rel="noopener noreferrer">+62 812-8203-5755</a></p>
                    <p><a href="mailto:fo.little@amaroossaresidence.com">fo.little@amaroossaresidence.com</a></p>
                </div>
            </div>
        </div>
    );
};

class LittleJakarta extends React.Component {
    componentDidMount() {
        console.log('Amaroossa Little Loaded');
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
            <Hotel booklink="https://www.bookandlink.com/booking/little-amaroossa-hotel_1922.html" title={`${title} | Amaroossa Hotel`} footer={<LittleFooter />}>
                <HotelBanner image={background} title={title} />
                {/* <SectionContainer>
                    <div className="container pb-5">
                        <SectionTitleContainer className="lines">
                            <h3>Our Facilites</h3>
                        </SectionTitleContainer>
                        <Slider {...facilitesSlider}>
                            {littleData.facilities.map((i, idx) => (
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
                                        <img src={`/${kitchen}`} alt="kitchen" />
                                        <p>Amo&apos;s Kitchen</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="col-12">
                                    <div className="el xl">
                                        <img src={`/${room}`} alt="Room" />
                                        <p>Room</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="col-12">
                                    <div className="el">
                                        <img src={`/${meeting}`} alt="Meeting Room" />
                                        <p>Meeting Room</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="el">
                                        <img src={`/${omaFunction}`} alt="Omas Function" />
                                        <p>Oma&apos;s Function</p>
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
                                    {/* <h2>A LITTLE ABOUT US </h2> */}
                                    <p>{title}</p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h5>Discover Luxury with the best view</h5>
                                {/* <p>
                                    The 4-star Amaroossa Hotel Cosmo Jakarta provides 98 comfortable and elegantly-designed guest rooms in a strategic location in the south of Jakarta, near numerous shopping malls and leisure facilities, and only a 40-minute drive from Jakarta Soekarno Hatta Airport.
                                </p> */}
                                {/* <p>
                                    Book a room in this boutique hotel in Jakarta and enjoy an exceptional experience designed for both business and leisure travelers. Modern facilities, spacious rooms, delicious dining experiences, and superior quality service. Book your stay now at the lowest online rates on the official website of Amaroossa Hotels.
                                </p> */}
                                <p>
                                    Book a room in this boutique hotel in Jakarta and enjoy an exceptional experience designed for both business and leisure travelers. Modern facilities, spacious rooms, delicious dining experiences, and superior quality service. Book your stay now at the lowest online rates on the official website of Amaroossa.com
                                </p>
                            </div>
                        </div>
                    </div>
                </AboutContainer>
            </Hotel>
        );
    }
}

export default LittleJakarta;
