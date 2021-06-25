import React from 'react';

class ScrollToTop extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const { scrollY } = window;
        const scrollBtn = document.querySelector('.vy-scroll-btn');
        if (scrollY > 150) {
            scrollBtn.classList.add('visible');
        } else if (scrollY < 150) {
            scrollBtn.classList.remove('visible');
        }
    }

    handleClick(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <div className="vy-scroll-btn" role="button" onClick={this.handleClick}>
                    <i className="ri-arrow-up-s-line" />
                </div>
            </>
        );
    }
}

export default ScrollToTop;
