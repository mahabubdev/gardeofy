import styled from 'styled-components';
import { NormalContainer } from '../../GlobalStyled';
import { bgColors, textColors } from '../../GlobalStyledVars';

export const ContactFormSectionWrap = styled.div`
    display: block;
    padding: 150px 0;
`;




const ContactFormContainer = styled.section`
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

    @media only screen and (max-width: 1199.9px) {
        h2, small {
            text-align: center;
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
    }
`;

export const ContactFormSectionContainer = ({ children }) => {
    return (
        <NormalContainer>
            <ContactFormContainer>
                { children }
            </ContactFormContainer>
        </NormalContainer>
    )
}


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0 1em;


    @media only screen and (max-width: 1199.9px) {
        flex-direction: column;
        gap: 1em 0;
    }
`;

export const Features = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em 0;

    .features_items {
        display: grid;
        gap: 1.5em 2em;
        place-items: center;
        grid-template-columns: repeat(2, 1fr);
    }

    p:first-child {
        display: block;
        color: ${textColors.gray};
        margin: 1em 0;
        line-height: 1.5em;
    }


    @media only screen and (max-width: 1199.9px) {
        .features_items {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export const FeatureItem = styled.div`
    display: flex;
    /* max-width: 300px; */
    padding: 1.5em 1em;
    box-shadow: 0 0 1.25em 0 rgba(0,0,0,0.075);
    border-radius: .5em;
    gap: 0 1em;
    transition: all .2s ease;

    &:hover {
        transform: scale(1.01);
        box-shadow: 0 0 1.25em 0 rgba(0,0,0,0.085);
    }


    .icon {
        font-size: 4em;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: ${textColors.theme};
    }

    .texts {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h5 {
            font-size: 1.25em;
            color: ${textColors.theme};
            text-transform: capitalize;
            font-weight: 500;
            margin-bottom: .5em;
        }

        p {
            color: ${textColors.gray};
        }
    }



    @media only screen and (max-width: 1280px) {
        .icon {
            font-size: 3em;
        }

        .texts {
            h5 {
                font-size: 1.25em;
            }
        }
    }
`;

export const ContactForm = styled.form`
    display: flex;
    min-width: 36%;
    min-height: 50vh;
    flex-direction: column;
    gap: 1em 0;
    padding: 1.5em 1em;
    background: linear-gradient(90deg, ${bgColors.themeHigh}, ${bgColors.theme});
    color: ${textColors.light};
    border-radius: .5em;

    h2 {
        color: ${textColors.light};
        font-size: 2em;
        position: relative;

        &:before {
            display: block;
            position: absolute;
            bottom: -.35em;
            left: 0;
            content: '';
            clear: both;
            width: 30%;
            max-width: 1.5em;
            opacity: .3;
            height: .1em;
            background-color: ${bgColors.light};
        }
    }

    input, textarea, button {
        outline: 0;
        border: 0;

        &:hover {
            outline: 0;
            border: 0;
        }
    }


    input, textarea {
        padding: .75em .75em .75em 1em;
        background-color: rgba(255,255,255,0.1);
        color: rgba(255,255,255,0.99);
        border-radius: .25em;

        &::placeholder {
            color: rgba(255,255,255,0.75);
        }
    }

    textarea {
        min-height: 80px;
    }

    button[type='submit'] {
        background-color: ${bgColors.light};
        color: ${textColors.theme};
        text-transform: uppercase;
        padding: 1em 0;
        border-radius: .25em;
        cursor: pointer;
    }


    @media only screen and (max-width: 1199.9px) {
        width: 100%;
        margin-top: 2em;

        h2 {
            display: inline-flex;
            margin: .5em auto;

            &:before {
                left: 25%;
                width: 50%;
                max-width: inherit;
            }
        }

        textarea {
            min-height: 120px;
        }
    }
`;