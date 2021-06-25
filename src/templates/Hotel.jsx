import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Header from '../components/Header/Header';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import Footer from '../components/Footer/Footer';

const FloatingSocial = styled.div`
    position: fixed;
    display: block;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, .05);
    top: 50%;
    right: 0;
    z-index: 2;
    transform: translateY(-50%);
    .ss-menu {
        position: relative;
        display: block;
        padding: 10px;
        margin: 0;
        background-color: #be8c4b;
        color: #fff;
        text-decoration: none;
        font-size: 36px;
        cursor: pointer;
        transition: .3s ease;
        &:hover {
            background-color: #9f7640;
        }
        
        i {
            vertical-align: middle;
        }
    }
`;

const Hotel = (props) => {
    const { children, title, booklink, footer } = props;
    return (
        <>
            <Helmet>
                <html lang="en" prefix="og: https://ogp.me/ns#" />
                <title>{title}</title>
                <meta name="description" content="Amaroossa Hotels provides a collection of stunning boutique hotels in Indonesia that combine cutting-edge modern style with superior quality facilities and services to create memorable hotel experiences and extraordinary value for money." />
                <meta property="og:title" content={title} />
                <meta property="og:type" content="video.movie" />
                <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
                <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
            </Helmet>
            <Header type="colored" booklink={booklink} />
            <main className="main with-padding">
                {children}
            </main>
            <FloatingSocial>
                {/* <a href="https://www.facebook.com/amaroossahotelsindonesia/" target="_blank" rel="noopener noreferrer" className="ss-menu">
                    <i className="ri-facebook-line" />
                </a> */}
                <a href="https://www.instagram.com/amaroossahotel/" target="_blank" rel="noopener noreferrer" className="ss-menu">
                    <i className="ri-instagram-line" />
                </a>
            </FloatingSocial>
            <ScrollToTop />
            {!footer === '' && (
                <Footer />
            )}
            {footer && (
                <Footer showMenu={false} customFooter>
                    {footer}
                </Footer>
            )}
        </>
    );
};

Hotel.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    booklink: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    footer: PropTypes.any.isRequired
};

export default Hotel;
