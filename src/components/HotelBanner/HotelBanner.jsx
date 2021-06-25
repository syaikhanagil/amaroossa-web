import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    min-height: 450px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;

    h2, h5 {
        z-index: 1;
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .4);
        top: 0;
        left: 0;
    }
`;

const HotelBanner = (props) => {
    const { image, title } = props;
    return (
        <Container style={{ backgroundImage: `url(/${image})` }}>
            <h2>
                {`${title.split(' ')[0]} ${title.split(' ')[1]}`}
            </h2>
            <h5>{title.split(' ')[2]}</h5>
        </Container>
    );
};

HotelBanner.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.node.isRequired
};

export default HotelBanner;
