import React from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import HotelBanner from '../../components/HotelBanner/HotelBanner';
import Hotel from '../../templates/Hotel';
import suiteData from '../../assets/data/suite-data';

import background from '../../assets/img/suite/suite-rooftop2.jpg';
import aboutBg from '../../assets/img/suite/suite-executive.jpg';
import ballrom from '../../assets/img/suite/suite-ballroom.jpg';
import resto from '../../assets/img/suite/suite-restaurant-1.jpg';
import rooftop from '../../assets/img/suite/suite-rooftop.jpg';
import pool from '../../assets/img/suite/suite-pool.jpg';
import billyard from '../../assets/img/suite/suite-billyard.jpg';

const SectionContainer = styled.section`
    position: relative;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 60px;
    &:nth-child(even){
        background-color: #f7f7f7;
    }

    .slick-slide {
        padding: 0 10px;
    }

    .slick-dots li {
        width: 10px;
        height: 10px;
        margin: 0 5px;
        button {
            outline: none;
            width: 10px;
            height: 10px;
            background: rgba(0, 0, 0, .3);
            border-radius: 50px;
            &::before {
                content: none;
            }
        }

        &.slick-active {
            button {
                width: 10px;
                height: 10px;
                background: rgba(0, 0, 0, .8);
            }
        }
    }

    &#our-hotels {
        [class*="col-"] {
            padding: 0;
            overflow: hidden;
        }
        .el {
            position: relative;
            height: 250px;
            overflow: hidden;
            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, .3);
                top: 0;
                left: 0;
            }

            img {
                position: relative;
                width: 100%;
            }
            &.xl {
                height: 500px;
                img {
                    width: auto;
                    height: 100%;
                }
            }

            p {
                position: absolute;
                bottom: 20px;
                left: 50%;
                font-size: 1.5rem;
                font-weight: 700;
                transform: translateX(-50%);
                color: #fff;
                z-index: 2;
            }
        }
    }
`;

const AboutContainer = styled.section`
    position: relative;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    color: #fff;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    [class*="col-"] {
        z-index: 1;
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        top: 0;
        left: 0;
    }
`;

const SectionTitleContainer = styled.div`
    position: relative;
    display: block;
    width: 100%;
    text-align: center;
    padding-bottom: 20px;

    &.__left {
        text-align: left !important;
    }

    &.__right {
        text-align: left !important;
    }

    &.lines {
        padding-top: 50px;

        &::before {
            content: '';
            position: absolute;
            display: block;
            width: 3px;
            height: 100px;
            background: #be8c4b;
            top: -70%;
            left: 50%;
            z-index: 1;
        }
    }

    h3 {
        position: relative;
        display: block;
    }
`;

const FacilitiesHolder = styled.div`
    position: relative;
    display: block;
    witdh: 100%;
    height: 300px;
    margin-bottom: 10px;
    outline: none;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .3);
        top: 0;
        left: 0;
        z-index: 1;
    }

    
    img {
        width: 100%;
    }

    h4 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        z-index: 2;
    }
`;

const title = 'Amaroossa Suite Bali';

const SuiteFooter = () => {
    return (
        <div className="container pt-4">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-12 col-md-6 mb-3">
                    <h5>{title}</h5>
                    <p>Taman Mumbul, Jl. Taman Kebo Iwa Jl. Nusa Dua No.2, Benoa, Kec. Kuta Sel., Kabupaten Badung, Bali 80361, Indonesia</p>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <h5>Contact Us</h5>
                    <p><a href="tel:+623618468877">+62 361-846-8877</a></p>
                    <p><a href="https://api.whatsapp.com/send?phone=6281803790880" target="_blank" rel="noopener noreferrer">+62 818-0379-0880</a></p>
                    <p><a href="mailto:rsv.bali@amaroossahotel.com">rsv.bali@amaroossahotel.com</a></p>
                </div>
            </div>
        </div>
    );
};

class SuiteBali extends React.Component {
    componentDidMount() {
        console.log('Amaroossa Suite Loaded');
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
            <Hotel booklink="https://www.bookandlink.com/booking/amaroossa-suite-bali_1919.html" title={`${title} | Amaroossa Hotel`} footer={<SuiteFooter />}>
                <HotelBanner image={background} title={title} />
                {/* <SectionContainer>
                    <div className="container pb-5">
                        <SectionTitleContainer className="lines">
                            <h3>Our Facilites</h3>
                        </SectionTitleContainer>
                        <Slider {...facilitesSlider}>
                            {suiteData.facilities.map((i, idx) => (
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
                                        <img src={`/${resto}`} alt="Restaurant" />
                                        <p>Restaurant</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="el">
                                        <img src={`/${ballrom}`} alt="Ballrom" />
                                        <p>Ballrom</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="col-12">
                                    <div className="el xl">
                                        <img src={`/${billyard}`} alt="Billyard" />
                                        <p>Billyard</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="col-12">
                                    <div className="el">
                                        <img src={`/${rooftop}`} alt="rooftop" />
                                        <p>Rooftop</p>
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
                                <h5>Welcome to Amaroossa Suite Bali</h5>
                                <p>
                                    The 4-star Amaroossa Hotel Suite Bali is a modern boutique hotel designed to create exceptional experiences for our guests. Enjoy our comfortable and elegantly-designed rooms at surprisingly low rates. Outstanding value for money and a perfect choice for anyone wishing to make their visit to Bali even more special and memorable.
                                </p>
                                <p>
                                    This All Suite boutique hotel in Bali features a collection of modern Executive, Royal, Pool, and Family Suites, all carefully crafted to guarantee rest and relaxation. Guests seeking an enjoyable and luxurious hotel experience need look no further: the superior quality services and facilities at the Amaroossa Hotel Suite Bali are the perfect choice. Book a room now at the lowest online rates on the official website of Amaroossa.com
                                </p>
                            </div>
                        </div>
                    </div>
                </AboutContainer>
            </Hotel>
        );
    }
}

export default SuiteBali;
