import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import promoSliderData from '../../assets/data/promo-slider';

const DialogContainer = styled.div`
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0);
    transition: background .3s ease;
    z-index: 100;

    .content {
        position: fixed;
        width: 768px;
        height: auto;
        top: 120%;
        left: 50%;
        transform: translateX(-50%);
        transition: .3s ease;

        a {
            width: 100%;
            height: 100%;


            .lazyload-wrapper {
                height: 100%;
            }

            .promo-content {
                width: 768px;
                height: 432px;
            }

            img {
                width: 100%;
            }
        }

        @media only screen and (max-width: 768px) {
            width: 80%;
        }
    }

    &.visible {
        background: rgba(0, 0, 0, .4);
        .content {
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

`;

const CloseBtn = styled.button`
    position: relative;
    display: flex;
    width: 50px;
    height: 50px;
    margin: 10px auto;
    background: $white;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    outline: none;
    border: none;
    border-radius: 100px;
`;

const PromoDialog = (props) => {
    const { handler } = props;
    const promoSliderSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 250,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <DialogContainer id="promo-dialog">
            <div className="content">
                <Slider {...promoSliderSettings}>
                    {promoSliderData.map((i) => (
                        <a href="/" key={i.id}>
                            <img src={i.img} alt={i.title} />
                        </a>
                    ))}
                </Slider>
                <CloseBtn type="button" onClick={handler}>
                    <i className="ri-close-line" />
                </CloseBtn>
            </div>
        </DialogContainer>
    );
};

PromoDialog.propTypes = {
    handler: PropTypes.func.isRequired
};

export default PromoDialog;
