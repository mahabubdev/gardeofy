import styled from 'styled-components';
import { bgColors, textColors } from '../../GlobalStyledVars';
import { NormalContainer } from '../../GlobalStyled';


export const ServiceSectionWrap = styled.section`
    display: block;
    padding: 0 0;
`;


export const ServiceContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: ${bgColors.light};
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding: 6em 4.5em;
    border-radius: .5em;
    box-shadow: 0 0 3em 0 rgba(0,0,0,0.025);
    overflow: hidden;
    margin-bottom: 1em;

    h2 {
        font-size: 3em;
        margin-bottom: 1em;
    }
    small {
        font-size: 1.5em;
        text-transform: uppercase;
        color: ${textColors.theme};
        margin-bottom: 1em;
        text-align: center;
    }




    @media only screen and (max-width: 1499.9px) {
        padding: 5em 4em;
    }

    @media only screen and (max-width: 1249.9px) {
        padding: 4em 3.75em;
        h2 { text-align: center }
    }

    @media only screen and (max-width: 991.9px) {
        padding: 3em 2.75em;
    }

    @media only screen and (max-width: 767.9px) {
        padding: 2.75em 2em;
        h2{
            font-size: 2em;
        }
        small {
            font-size: 1.25em;
        }
    }
`;

export const ServiceSectionContainer = ({ children }) => {
    return (
        <NormalContainer>
            <ServiceContainer>
                { children }
            </ServiceContainer>
        </NormalContainer>
    )
}

export const ServiceCardsWrap = styled.div`
    display: grid;
    width: 100%;
    margin-top: 1em;
    grid-template-columns: repeat(auto-fit, 320px);
    justify-content: center;
    align-items: center;
    place-items: center;
    gap: 1.5em;

    @media only screen and (max-width: 1499.9px) {
        margin-top: 2em;
        grid-template-columns: repeat(auto-fit, 280px);
    }

    @media only screen and (max-width: 767.9px) {
        margin-top: 2em;
        grid-template-columns: repeat(auto-fit, 250px);
        gap: 1.5em 1em;
    }
`;



export const ServiceCard = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    min-height: 350px;
    flex-direction: column;
    padding: 2.75em 2em;
    border: 1px solid transparent;
    box-shadow: 0 0 1.25em 0 rgba(0,0,0,0.04);
    border-radius: .4em;
    cursor: pointer;
    transition: all .3s ease-in;
    z-index: 1;
    overflow: hidden;

    &:before {
        display: block;
        position: absolute;
        content: '';
        clear: both;
        top: -50px;
        left: -50px;
        width: 100px;
        height: 100px;
        background: linear-gradient(180deg, ${bgColors.theme}, ${bgColors.themeHigh});
        z-index: -1;
        clip-path: circle(50%);
        transition: all .2s ease-in;
    }

    &:hover {
        &:before {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            clip-path: circle(100%);
        }

        box-shadow: 0 0 1.25em 0 ${bgColors.themeRGBA(.3)};

        span:first-child, .service_info h4, .service_info p {
            color: ${textColors.light};
        }
    }


    span {
        &:first-child {
            display: inline-flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            font-size: 5em;
            margin-bottom: .5em;
            color: ${textColors.theme};
        }
    }

    .service_info {
        h4 {
            font-size: 1.25em;
            font-weight: 500;
            text-transform: capitalize;
            margin-bottom: .5em;
            color: ${textColors.theme};
        }

        p {
            color: ${textColors.gray};
            line-height: 1.5em;
        }
    }



    @media only screen and (max-width: 767.9px) {
        min-height: 250px;
        padding: 1.75em 1em;

        h4, p {
            text-align: center;
        }

        span {
            &:first-child {
                font-size: 4em;
                margin-bottom: .5em;
            }
        }
    }
`;