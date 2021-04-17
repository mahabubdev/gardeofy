import styled from 'styled-components';
import { NormalContainer } from '../../GlobalStyled';
import { bgColors, textColors } from '../../GlobalStyledVars';


export const TestimonialWrap = styled.section`
    display: block;
    padding: 0 0;
`;


export const TestimonialContainer = styled.div`
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

export const TestimonialSectionContainer = ({ children }) => {
    return (
        <NormalContainer>
            <TestimonialContainer>
                { children }
            </TestimonialContainer>
        </NormalContainer>
    )
}


export const TestimonialCard = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 1.5em 0;
    padding: 3em 2em;
    background-color: ${bgColors.normal};
    color: ${textColors.normal};
    border-radius: .5em;
    max-width: 480px;
    margin: 0 .25em;
    outline: none;
    border: none;

    &:hover, &:active, &:focus {
        outline: 0;
        border: none;
    }

    .img {
        display: inline-block;
        width: 60px;
        height: 60px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            outline: 0;
            border: none;
        }
    }

    .top_part, .bottom_part {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 0 1.5em;

        p {
            padding-left: 100px;
            opacity: .85;
        }

        .client {
            display: flex;
            flex-direction: column;
            /* background-color: yellow; */

            h4  {
                color: ${textColors.theme};
                margin: .1em 0;
                text-align: left;
            }

            small {
                color: ${textColors.gray};
                font-size: 1em;
                text-transform: capitalize;
                text-align: left;
            }
        }
    }

    .qicon {
        position: absolute;
        top: .55em;
        left: .35em;
        opacity: .1;
        font-size: 5em;
    }


    @media only screen and (max-width: 600px) {
        width: 100%;
        /* min-width: 220px; */
        padding: 1.25em .5em;

        .qicon {
            top: .25em;
            left: calc(50% - 40px);
        }
        .top_part, .bottom_part {
            justify-content: center;
            gap: 1.5em 1em;

            p {
                padding-left: 0;
                padding-top: 5em;
                text-align: center;
            }
        }
    }
`;