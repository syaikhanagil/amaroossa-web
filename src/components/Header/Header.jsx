import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import logo from '../../assets/img/amaroossa.png';
import hotelSliderData from '../../assets/data/hotel-slider';

const MenuBtn = styled.button`
    position: absolute;
    display: none;
    width: auto;
    height: auto;
    background: transparent;
    padding: 7px;
    outline: 0;
    border: 0;
    top: 50%;
    right: 1rem;
    cursor: pointer;
    transform: translateY(-50%);
    z-index: 99;

    .strip {
        position: relative;
        display: block;
        height: 2px;
        width: 25px;
        background: #fff;
        float: right;
        &:first-child,
        &:last-child {
            width: 30px;
        }
        &:first-child {
            top: -7px;
        }
        &:last-child {
            bottom: -7px;
        }
    }
    @media only screen and (max-width: 768px) {
        display: inline-block;
    }
`;

const BookLink = styled.a`
    position: relative;
    display: block;
    height: 100%;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    color: #fff;
    background: #be8c4b;
    text-decoration: none;
    transition: .3s ease;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 50%;
        top: 100%;
        left: 0;
        border-style: solid;
        border-width: 20px 55px 0 55px;
        border-color: #be8c4b transparent transparent transparent;
        transition: .3s ease;

        @media only screen and (max-width: 768px) {
            content: none;
        }
    }

    &:hover {
        background: #9f7640;
        color: #fff;
        &::after {
            border-color: #9f7640 transparent transparent transparent;
        }
    }
`;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleMobileNav = this.handleMobileNav.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const { scrollY } = window;
        const header = document.querySelector('.vy-header');
        if (scrollY > 50) {
            header.classList.add('has-background');
        } else if (scrollY < 50) {
            header.classList.remove('has-background');
        }
    }

    handleMobileNav(e) {
        e.preventDefault();
        const nav = document.querySelector('.vy-nav');
        nav.classList.toggle('visible');
    }

    handleSubmenuOpen(id) {
        const component = document.getElementById(id);
        component.classList.add('visible');
    }

    handleSubmenuClose(id) {
        const component = document.getElementById(id);
        component.classList.remove('visible');
    }

    handleSubmenuClick(id) {
        const component = document.getElementById(id);
        const className = component.className.toString();
        if (!className.includes('visible')) {
            component.classList.add('visible');
            return;
        }
        component.classList.remove('visible');
    }

    render() {
        const { type, booklink } = this.props;
        return (
            <header className={type === 'colored' ? 'vy-header colored' : 'vy-header'}>
                <div className="vy-header-item">
                    <div className="__left">
                        <a href="/" className="logo">
                            <img src={`/${logo}`} alt="Amaroossa" />
                        </a>
                    </div>
                    <div className="__right">
                        <MenuBtn id="oya" onClick={this.handleMobileNav}>
                            <div className="strip" />
                            <div className="strip" />
                            <div className="strip" />
                        </MenuBtn>
                        <nav className="vy-nav">
                            <ul className="vy-nav-menu">
                                <li className="vy-nav-item">
                                    <a href="/">Home</a>
                                </li>
                                <li
                                    id="our-hotel-menu"
                                    className="vy-nav-item"
                                    onClick={() => { this.handleSubmenuClick('our-hotel-menu'); }}
                                >
                                    <span>
                                        Our Hotels
                                        <i className="ri-arrow-down-s-line" />
                                    </span>
                                    <ul className="vy-nav-submenu">
                                        {hotelSliderData.map((i) => (
                                            <li key={i.id} className="vy-nav-subitem">
                                                <a href={i.linkDetail}>{i.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="vy-nav-item">
                                    <a to="/terms">Terms</a>
                                </li>
                                {/* <li className="vy-nav-item">
                                    <span>Contact Us</span>
                                </li> */}
                                {booklink !== '' && (
                                    <li className="vy-nav-item book-link">
                                        <BookLink href={booklink} target="_blank" rel="noopener noreferrer">Book Now</BookLink>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

Header.defaultProps = {
    type: 'default',
    booklink: ''
};

Header.propTypes = {
    type: PropTypes.string,
    booklink: PropTypes.string
};

export default Header;
