import React from 'react';
// import Slider from 'react-slick';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Main from '../../templates/Main';
// import parallax1 from '../../assets/img/amaroossa-banner-1.jpg';
import logo from '../../assets/img/logo-amaroossa-2.png';
import hotelSliderData from '../../assets/data/hotel-slider';
import LazyImage from '../../components/LazyImage/LazyImage';

// const HeroParallax = styled.div`
//     position: relative;
//     display: flex;
//     min-height: 100vh;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     background-size: cover;
//     background-attachment: fixed;
//     background-position: top center;
//     background-repeat: no-repeat;
//     @media screen and (max-width: 768px){
//         background-position: center;
//     }
// `;

// const GlowBtn = styled.button`
//     position: relative;
//     display: block;
//     min-width: 130px;
//     width: auto;
//     margin: 5px 0 10px;
//     padding: 5px 15px;
//     color: #fff;
//     font-family: Poppins, sans-serif;
//     text-decoration: none;
//     background: transparent;
//     border: 2px solid rgba(255,255,255,0);
//     box-shadow: inset 0 0 20px rgba(255,255,255,0);GlowBtn
//     outline: 2px solid;
//     outline-color: rgba(255,255,255,.5);
//     transition: .3s ease;
//     cursor: pointer;

//     &:hover {
//         border: 2px solid #be8c4b;
//         box-shadow: inset 0 0 20px rgba(185,153,17,.7) , 0 0 20px rgba(185,153,17,.2);
//         outline-color: rgba(185,153,17,0);
//         outline-offset: 15px;
//     }
// `;

const GlowLink = styled.a`
    position: relative;
    display: block;
    min-width: 130px;
    width: auto;
    margin: 10px 5px 0;
    padding: 5px 15px;
    color: #fff;
    font-family: Poppins, sans-serif;
    text-align: center;
    text-decoration: none;
    background: transparent;
    border: 2px solid rgba(255,255,255,0);
    box-shadow: inset 0 0 20px rgba(255,255,255,0);
    outline: 2px solid;
    outline-color: rgba(255,255,255,.5);
    transition: .3s ease;
    cursor: pointer;

    &:hover {
        display: inline-block;
        color: #fff;
        border: 2px solid #be8c4b;
        box-shadow: inset 0 0 20px rgba(185,153,17,.7) , 0 0 20px rgba(185,153,17,.2);
        outline-color: rgba(185,153,17,0);
        outline-offset: 15px;
    }

    @media screen and (max-width: 768px){
        min-width: 0;
    }
`;

// const HeroContent = styled.div`
//     position: relative;
//     display: block;
//     text-align: center;
//     color: #fff;

//     ${GlowBtn}{
//         margin: auto;
//     }
// `;

const BrandLogo = styled.div`
    position: relative;
    display: block;
    height: 172px;
    text-align: center;
    
    a {
        position: relative;
        display: inline-block;
        height: 100%;
        img {
            height: 100%;
        }
    }
`;

const SectionContainer = styled.section`
    position: relative;
    display: block;
    padding-top: 25px;
    padding-bottom: 25px;
    background: transparent;
    &#our-hotels {
        padding-top: 65px;
        color: #333;
        .slick-arrow {
            position: absolute;
            z-index: 1;
            &.slick-prev {
                left: 5rem;
            }
            &.slick-next {
                right: 5rem;
            }
            &::before {
                color: #333;
            }
        }
    }
`;

// const SectionTitle = styled.h3`
//     text-align: center;
//     color: #333;
//     margin-bottom: 30px;
// `;

const HotelHolder = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline: none;
    overflow: hidden;
    box-shadow: 0 3px 15px 5px rgba(0, 0, 0, .5);

    &::before {
        content: "";
        position: absolute;
        background: transparent;
        top: 15px;
        bottom: 15px;
        left: 15px;
        right: 15px;
        border: 1px solid #be8c4b;
        opacity: .8;
        z-index: 2;
    }

    .hotel-image {
        position: relative;
        width: 100%;
        height: 270px;
        overflow: hidden;
        &::after {
            content: '';
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .3);
            top: 0;
            left: 0;
            transition: background .3s ease;
            z-index: 1;
        }

        .lazyload-wrapper {
            height: 100%;
            img {
                position: relative;
                width: 100%;
                transition: transform .25s, visibility .25s ease-in;
                @media screen and (max-width: 768px){
                    height: 100%;
                    width: auto;
                }
            }
            
        }
        &:not(:first-child) {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            z-index: 1;
            transition: .3s ease;
        }

        @media screen and (max-width: 768px){
            height: 250px;
        }
    }

    .content {
        position: absolute;
        display: block;
        width: 100%;
        text-align: center;
        color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;

        .title {
            position: relative;
            padding: 0 25px;
            opacity: 1;
            font-weight: 600;
            visibility: visible;
            transition: .25s ease;
        }

        
        .m-action {
            position: relative;
            display: block;
            width: auto;

            ${GlowLink} {
                margin: 10px auto 0;
            }
        }
    }

    .action {
        position: absolute;
        display: block;
        left: 50%;
        bottom: 10px;
        opacity: 0;
        visibility: hidden;
        transition: .3s ease;
        transform: translateX(-50%);
        z-index: 4;
    }

    &:hover {
        .content > .title {
            // opacity: 0;
            // visibility: hidden;

            @media screen and (max-width: 768px){
                opacity: 1;
                visibility: visible;
            }
        }
        .action {
            bottom: 50%;
            opacity: 1;
            visibility: visible;
            transform: translate(-50%, 50%);

            @media screen and (max-width: 768px){
                left: 0;
                bottom: 0;
                transform: none;
            }
        }
        
        .hotel-image {
            &::after {
                background: rgba(0, 0, 0, .5);
            }
            img {
                transform: scale(1.2);
            }
            &:not(:first-child) {
                opacity: 1;
            }
        }
    }
`;

const textAnimation = keyframes`
    0%   {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%); 
    }
 `;

const TopInfo = styled.div`
    position: relative;
    display: block;
    width: 100%;
    text-align: center;
    background: #be8c4b;
    padding: 5px 0;
    color: #fff;
    white-space: nowrap;
    span {
        display: block;
        width: 100%;
        transform:translateX(100%);
        animation: ${textAnimation} 10s linear infinite;
    }

    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`;

// const HotelBtn = styled.button`
//     position: relative;
//     display: block;
//     width: 100%;
//     margin: 5px 0;
//     padding: 5px 15px;
//     color: #fff;
//     font-family: Poppins, sans-serif;
//     text-decoration: none;
//     background: transparent;
//     border: 2px solid rgba(255,255,255,0);
//     box-shadow: inset 0 0 20px rgba(255,255,255,0);
//     outline: none;
//     transition: .3s ease;
//     cursor: pointer;

//     &:hover {
//         border: 2px solid #b99911;
//         box-shadow: inset 0 0 20px rgba(185,153,17,.7) , 0 0 20px rgba(185,153,17,.2);
//         outline-color: rgba(185,153,17,0);
//         outline-offset: 15px;
//     }
// `;

// const ScrollDownBtn = styled.button`
//     position: absolute;
//     display: block;
//     background: transparent;
//     left: 50%;
//     bottom: 10%;
//     outline: none;
//     border: none;
//     transform: translateX(-50%);
//     cursor: pointer;
//     z-index: 1;
//     .mouse {
//         position: relative;
//         display: block;
//         height: 40px;
//         width: 24px;
//         border: 2px solid #fff;
//         border-radius: 16px;
//         cursor: pointer;

//         .wheel {
//             position: absolute;
//             display: block;
//             height: 6px;
//             width: 6px;
//             background: #fff;
//             bottom: 15%;
//             left: 50%;
//             border-radius: 50px;
//             transition: .3s ease;
//             transform: translateX(-50%);
//         }
//     }
//     &:hover .mouse > .wheel {
//         bottom: 65%;
//     }
// `;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleScrollToBottom = this.handleScrollToBottom.bind(this);
    }

    handleScrollToBottom(e) {
        e.preventDefault();
        const container = document.getElementById('our-hotels');
        container.scrollIntoView(true);
    }

    handleToLocation(link) {
        window.location = link;
    }

    render() {
        // const hotelSliderSettingsMD = {
        //     dots: true,
        //     infinite: true,
        //     centerMode: true,
        //     autoplay: true,
        //     speed: 500,
        //     slidesToShow: 2,
        //     slidesToScroll: 1
        // };

        // const hotelSliderSettingsSM = {
        //     dots: false,
        //     infinite: true,
        //     centerMode: true,
        //     autoplay: true,
        //     speed: 500,
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        // };

        return (
            <Main useHeader={false}>
                <TopInfo>
                    <span>Untuk menunjang keberahasilan booking, mohon non-aktifkan ads-blocker.</span>
                </TopInfo>
                <SectionContainer className="container" id="landing-area">
                    <BrandLogo className="mb-4">
                        <a href="/">
                            <img src={logo} alt="Amaroossa Hotels" />
                        </a>
                    </BrandLogo>
                    <div className="row justify-content-between">
                        {hotelSliderData.map((i) => (
                            <div key={i.id} className="col-6 mb-4">
                                <HotelHolder data-hotel-id={i.id} data-hotel={i.title}>
                                    {i.img.map((ii, idx) => (
                                        <LazyImage key={idx} className="hotel-image" src={ii} alt={i.title} />
                                    ))}
                                    <div className="content">
                                        <h6 className="title d-block d-md-none">{i.title}</h6>
                                        <h4 className="title d-none d-md-block">{i.title}</h4>
                                        <div className="m-action d-inline-block">
                                            <GlowLink href={i.linkDetail}>View Details</GlowLink>
                                            <GlowLink rel="nofollow" href={i.linkBooking}>Book Now</GlowLink>
                                        </div>
                                    </div>
                                    <div className="action d-none">
                                        {/* <GlowLink href={i.linkDetail}>View Details</GlowLink> */}
                                        <GlowLink className="d-none d-md-block" rel="nofollow" href={i.linkBooking}>Book Bow</GlowLink>
                                    </div>
                                </HotelHolder>
                            </div>
                        ))}
                    </div>
                </SectionContainer>
            </Main>
        );
    }
}

export default Home;
