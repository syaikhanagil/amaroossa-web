import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
    const { showMenu, customFooter, children } = props;
    return (
        <footer className="vy-footer">
            {showMenu && (
                <div className="container pt-4">
                    <div className="row justify-content-center justify-content-md-between">
                        <div className="col-12 col-md-4 mb-3">
                            <h5>Amaroossa Hotels</h5>
                            <p>Amaroossa Hotels provides a collection of stunning boutique hotels in Indonesia that combine cutting-edge modern style with superior quality facilities and services to create memorable hotel experiences and extraordinary value for money.</p>
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <h5>Amaroossa Hotels</h5>
                            <p><a href="/blog">Blog</a></p>
                            <p><a href="/terms">Terms</a></p>
                            <p><a href="/contact-us">Contact US</a></p>
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <h5>Amaroossa Hotels</h5>
                            <p><a href="/blog">Blog</a></p>
                            <p><a href="/terms">Terms</a></p>
                            <p><a href="/contact-us">Contact US</a></p>
                        </div>
                    </div>
                </div>
            )}
            {customFooter && (
                <>
                    {children}
                </>
            )}
            <div className="copyright">
                Copyright © 2021 - Amaroossa Hotels
            </div>
        </footer>
    );
};

Footer.defaultProps = {
    children: 'iya',
    showMenu: true,
    customFooter: false
};

Footer.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any,
    showMenu: PropTypes.bool,
    customFooter: PropTypes.bool
};
export default Footer;
