import styled from '@emotion/styled';

export const SectionContainer = styled.section`
    position: relative;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 60px;

    .slick-slide {
        padding: 0 10px;
    }

    .slick-dots {
        position: relative;
        li {
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
                transition: .3s ease;
            }

            img {
                position: relative;
                width: 100%;

            }
            &.xl {
                height: 500px;
                @media only screen and (max-width: 768px) {
                    height: 250px;
                }
                img {
                    width: auto;
                    height: 100%;
                    @media only screen and (max-width: 768px) {
                        width: 100%;
                    }
                }
            }

            p {
                position: absolute;
                bottom: 0;
                left: 50%;
                font-size: 1.5rem;
                font-weight: 700;
                transform: translateX(-50%);
                color: #fff;
                opacity: 0;
                z-index: 2;
                transition: .3s ease;
            }

            &:hover {
                p {
                    bottom: 20px;
                    opacity: 1;
                }
                &::after {
                    background: rgba(0, 0, 0, .7);
                }
            }
        }
    }
`;

export const AboutContainer = styled.section`
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

export const SectionTitleContainer = styled.div`
    position: relative;
    display: block;
    width: 100%;
    color: #fff;
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

export const FacilitiesHolder = styled.div`
    position: relative;
    display: block;
    witdh: 100%;
    height: 300px;
    margin-bottom: 10px;
    outline: none;
    overflow: hidden;
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
        @media only screen and (max-width: 768px) {
            width: auto;
            height: 100%;
        }
    }

    h4 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        text-align: center;
        z-index: 2;
    }
`;
