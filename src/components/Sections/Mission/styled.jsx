import styled from 'styled-components';
import { NormalContainer } from '../../GlobalStyled';
import { bgColors, textColors } from '../../GlobalStyledVars';


export const MissionSectionWrap = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
`;

const MissionContainer = styled.div`
    display: flex;
    background-color: ${bgColors.light};
    justify-content: space-between;
    align-items: center;
    padding: 0;
    border-radius: .5em;
    box-shadow: 0 0 3em 0 rgba(0,0,0,0.025);
    overflow: hidden;


    @media only screen and (max-width: 1199.9px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const MissionSectionContainer = ({ children }) => {
    return (
        <NormalContainer>
            <MissionContainer>
                { children }
            </MissionContainer>
        </NormalContainer>
    )
}

export const MissionInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5em 0;
    align-self: center;
    padding: 6.5em 5.5em;

    h2 {
        font-size: 2.5em;
        font-weight: 600;
        color: ${textColors.normal};
        margin: .35em 0;
    }

    small {
        font-size: 1.5em;
        text-transform: uppercase;
        color: ${textColors.theme};
    }

    .btn {
        display: inline-block;
        margin-top: 2.5em;
        background-color: ${bgColors.theme};
        color: ${textColors.light};
        padding: 1em 2.5em;
        text-transform: uppercase;
        border-radius: .3em;
        box-shadow: 0 0 1em 0 ${bgColors.themeRGBA(.3)};
        transition: all .25s ease-in;
        cursor: pointer;

        &:hover {
            box-shadow: 0 0 1em 0 ${bgColors.themeRGBA(.5)};
            transform: translateY(-.2em);
        }
    }


    @media only screen and (max-width: 767.9px) {
        padding: 4em 2.5em;
    }

    @media only screen and (max-width: 599.9px) {
        padding: 2.5em 1.5em;

        h2 {
            font-size: 2em;
        }

        small {
            font-size: 1.25em;
        }
    }
`;

export const Missions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em 0;
`;

export const Mission = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 .75em;
    box-shadow: 0 0 1em 0 rgba(0,0,0,0.05);
    padding: 1em;
    border-radius: .5em;
    transition: all .2s ease-in;

    &:hover {
        transform: translateY(-.15em);
        cursor: pointer;
    }

    span {
        font-size: 3.5em;
    }

    .mission_texts {
        h4 {
            text-transform: capitalize;
            font-weight: 600;
        }

        p {
            color: ${textColors.gray};
            font-size: 1em;
            line-height: 1.5em;
        }
    }


    @media only screen and (max-width: 767.9px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;

        span {
            font-size: 5em;
        }

        .mission_texts {
            h4 {
                text-align: center;
            }

            p {
                text-align: center;
            }
        }
    }
`;



export const MissionImgBanner = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 40%;
    min-width: 35%;
    max-width: 500px;
    padding: 0;
    padding-right: 5.5em;

    span {
        display: inline-flex;
        position: absolute;
        top: calc(50% - 1em);
        left: calc(0% - 1em);
        justify-content: center;
        align-items: center;
        cursor: pointer;
        /* width: 80px;
        height: 80px; */
        font-size: 2em;
        padding: .5em;
        border-radius: 50%;
        border: .1em solid ${bgColors.themeRgbaDeep(.1)};
        box-shadow: 0 0 1em 0 ${bgColors.themeRGBA(.9)};
        background-color: ${bgColors.theme};
        color: ${bgColors.light};
    }

    img {
        width: 100%;
        max-width: 100%;
        object-fit: cover;
        border-radius: .3em;
        border: .2em solid ${bgColors.themeRGBA(.3)};
        box-shadow: 0 0 2.5em 0 ${bgColors.themeRGBA(.2)};
    }


    @media only screen and (max-width: 1199.9px) {
        padding-right: 0;
        padding-bottom: 5em;

        span {
            top: calc(50% - 2em);
            left: calc(50% - 1em);
        }
    }


    @media only screen and (max-width: 767.9px) {
        width: 100%;
    }
`;