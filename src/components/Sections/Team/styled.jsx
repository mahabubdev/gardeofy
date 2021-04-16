import styled from 'styled-components';
import { NormalContainer } from '../../GlobalStyled';
import { bgColors, textColors } from '../../GlobalStyledVars';

export const TeamSectionWrap = styled.div`
    display: block;
    padding: 150px 0;
`;

const TeamContainer = styled.section`
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
    /* background: linear-gradient(90deg, ${bgColors.theme}, ${bgColors.themeHigh}); */

    h2 {
        font-size: 3em;
        margin-bottom: 1em;
        color: ${textColors.normal}
    }
    small {
        font-size: 1.5em;
        text-transform: uppercase;
        color: ${textColors.theme};
        margin-bottom: 1em;
        text-align: center;
    }

    .rec-arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1em;
        color: ${textColors.light};
        background-color: ${bgColors.themeHigh};
        box-shadow: inherit;
        width: 30px;
        min-width: 30px;
        height: 30px;
        line-height: 30px;

        &:focus, &:active, &:hover {
            color: ${textColors.light};
            background-color: ${bgColors.themeHigh};
        } 
    }

    .rec-pagination {
        .rec-dot {
            box-shadow: inherit;
            background-color: ${bgColors.themeRgbaDeep(.1)};
        }

        .rec-dot_active {
            background-color: ${bgColors.themeRGBA(1)};
        }
    }

    @media only screen and (max-width: 767.9px) {
        padding: 3em .5em;
        h2 {
            font-size: 2em;
        }
        small {
            font-size: 1.25em;
        }
        h2, small {
            text-align: center;
        }
    }
`;

export const TeamSectionContainer = ({ children }) => {
    return (
        <NormalContainer>
            <TeamContainer>
                { children }
            </TeamContainer>
        </NormalContainer>
    )
}



export const TeamItem = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 360px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 1;
    cursor: pointer;
    transition: all .2s ease;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 25%;
        background-color: ${bgColors.themeRGBA(.9)};
        color: ${bgColors.light};
        gap: .3em;
        padding: .5em;
        transition: all .2s ease;

        h4 {
            font-weight: 600;
            font-size: 1.25em;
        }
        p {
            opacity: .8;
        }
    }

    &:hover {
        div {
            height: 35%;
            background-color: ${bgColors.themeRGBA(1)};
        }
    }

    @media only screen and (max-width: 991.9px) {
        width: 250px;
        height: 320px;
    }
`;