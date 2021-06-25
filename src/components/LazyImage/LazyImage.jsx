import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';

const ImageWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

const loadingAnimation = keyframes`
    0% {
        background-color: #fff;
    }
    50% {
        background-color: #ccc;
    }
    100% {
        background-color: #fff;
    }
`;

const Placeholder = styled.div`
    position: absolute;
    display: block;
    height: 100%;
    min-height: 100px;
    width: 100%;
    top: 0;
    left: 0;
    animation: ${loadingAnimation} 2s infinite;
`;

const StyledImage = styled.img`
    position: relative;
    display: block;
    height: 100%;
`;

const LazyImage = (props) => {
    const placeholderRef = React.useRef();
    const { className, src, alt, scroll } = props;

    const removePlaceholder = () => {
        placeholderRef.current.remove();
    };

    return (
        <ImageWrapper className={className}>
            <Placeholder ref={placeholderRef} id="placeholder" />
            <LazyLoad scroll={scroll}>
                <StyledImage onLoad={removePlaceholder} onError={removePlaceholder} src={src} alt={alt} />
            </LazyLoad>
        </ImageWrapper>
    );
};

LazyImage.defaultProps = {
    scroll: true
};

LazyImage.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    scroll: PropTypes.bool
};

export default LazyImage;
