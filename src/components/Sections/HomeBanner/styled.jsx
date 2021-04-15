import styled from 'styled-components';
import { bgColors, textColors } from '../../GlobalStyledVars';

export const BannerSectionWrap = styled.section`
    display: block;
    position: relative;
    margin: 0;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    z-index: 1;

    &:before {
        display: block;
        position: absolute;
        content: '';
        clear: both;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${bgColors.themeRGBA(.6)};
        z-index: -1;
    }
`;



export const BannerContentWrap = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    min-height: 100vh;
    overflow: hidden;

    .banner_texts {
        display: flex;
        flex-direction: column;
        gap: 1em 0;
        color: ${textColors.light};

        h1 {
            font-size: 5em;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        h2 {
            font-size: 2.5em;
            font-size: 500;
        }
        h1, h2 {
            text-transform: uppercase;
        }

        .btn {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            background-color: ${bgColors.theme};
            color: ${textColors.light};
            padding: 1em 1.7em;
            border-radius: .4em;
            text-transform: uppercase;
            margin-top: .35rem;
            box-shadow: 0 0 .5em 0 rgba(0,0,0,0.1);
        }

        @media only screen and (max-width: 767.9px) {
            justify-content: center;
            align-items: center;

            h1 {
                font-size: 2.5em;
                text-align: center;
            }
            h2 {
                font-size: 1.5em;
            }
        }
    }
`;


export const BannerPersonPhoto = styled.div`
    display: block;
    position: absolute;
    width: auto;
    height: 85%;
    bottom: 0;
    right: 1em;
    z-index: -1;

    img {
        width: auto;
        height: 100%;
    }

    @media only screen and (max-width: 991.9px) {
        display: none;
    }
`;