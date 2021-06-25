import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import Header from '../components/Header/Header';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
// import pattern from '../assets/img/bg-pattern-skulls.gif';
import Footer from '../components/Footer/Footer';
import PromoDialog from '../components/PromoDialog/PromoDialog';

const FloatingSocial = styled.div`
    position: fixed;
    display: block;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, .05);
    top: 50%;
    right: 0;
    z-index: 6;
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

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasPromo: true,
            showPromo: false
        };
    }

    componentDidMount() {
        const { hasPromo } = this.state;
        const { usePromo } = this.props;
        if (hasPromo && usePromo) {
            this.setState({ showPromo: true });
            setTimeout(() => {
                const promo = document.getElementById('promo-dialog');
                promo.classList.add('visible');
            }, 2000);
        }
    }

    render() {
        const { children, useHeader, usePromo, title, usePadding, type } = this.props;
        const { hasPromo, showPromo } = this.state;
        return (
            <>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content="Amaroossa Hotels provides a collection of stunning boutique hotels in Indonesia that combine cutting-edge modern style with superior quality facilities and services to create memorable hotel experiences and extraordinary value for money." />
                    <link rel="canonical" href="https://amaroossa.com/" />
                </Helmet>
                {useHeader && (<Header type={type} />)}
                <main className={usePadding === true ? 'main with-padding' : 'main'}>
                    {/* <main className={usePadding === true ? 'main with-padding' : 'main'} style={{ backgroundImage: `url(/${pattern})` }}> */}
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
                <Footer showMenu={false} />
                {usePromo && hasPromo && showPromo && (
                    <PromoDialog
                        handler={() => {
                            const promo = document.getElementById('promo-dialog');
                            promo.classList.remove('visible');
                            setTimeout(() => {
                                this.setState({ showPromo: false });
                            }, 500);
                        }}
                    />
                )}
            </>
        );
    }
}

Main.defaultProps = {
    title: 'Amaroossa Hotels',
    useHeader: true,
    usePromo: true,
    usePadding: false,
    type: 'default'
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    useHeader: PropTypes.bool,
    usePromo: PropTypes.bool,
    usePadding: PropTypes.bool,
    type: PropTypes.string
};

export default Main;
