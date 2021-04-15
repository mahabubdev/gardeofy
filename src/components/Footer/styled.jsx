import styled from 'styled-components';
import { bgColors, textColors } from '../GlobalStyledVars';

export const FooterWrapper = styled.footer`
    display: block;
    margin: 0;
    padding: 0;


    .credit_bar {
        padding: 1em 0;
        background-color: ${bgColors.themeDeep};
        color: ${textColors.light};

        a {
            color: ${textColors.light};
            text-decoration: underline;
        }
    }
`;


export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 80%;
    max-width: 1500px;
    margin: 0 auto;
    flex-direction: row;
    gap: 0;

    p {
        display: inline-flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 1099.9px) {
        flex-direction: column;
        gap: 5em 0;
    }

    @media only screen and (max-width: 767.9px) {
        width: 96%;
        padding: .25em;
    }
`;


export const FooterContentWrap = styled.div`
    display: flex;
    position: relative;
    padding: 6em 0;
    color: ${textColors.light};
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;

    &:before {
        display: flex;
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: rgba(0,0,0,0.75);
    }


    .logo {
        font-size: 2.25em;
        font-weight: 600;
        text-transform: capitalize;
        height: 100%;
        object-fit: cover;
        width: auto;
        margin: 0;
        color: ${textColors.light};

        .dot {
            color: ${textColors.theme};
            font-size: 1.25em;
        }
    }


    .footer_brand {
        display: flex;
        flex-direction: column;
        gap: 1em 0;

        ul {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 0 .85em;
            list-style: none;
            padding-left: 0;

            li a {
                color: ${textColors.light};
                font-size: 1.5em;

                &:hover {
                    color: ${textColors.theme};
                }
            }
        }
    }
`;

export const FooterCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em 0;

    h3 {
        position: relative;
        font-weight: 500;
        font-size: 1.5em;
        margin-bottom: 1.5em;
        text-transform: uppercase;
        letter-spacing: 1px;

        &:after {
            display: block;
            position: absolute;
            content: '';
            width: 25%;
            max-width: 2.5em;
            height: .15em;
            background-color: ${bgColors.theme};
            bottom: -.7em;
            left: 0;
        }
    }

    &:last-child {
        max-width: 25%;
        @media only screen and (max-width: 991.9px) {
            max-width: inherit;
        }
    } 

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding-left: 0;
        gap: .85em 0;

        li {
            display: flex;
            gap: .35em;
            align-items: center;
            font-size: 1em;

            span {
                &:first-child {
                    color: ${textColors.theme};
                } 
            }
        }
    }
`;


export const NewsLetter = styled.form`
    display: flex;
    justify-content: space-between;
    gap: 0;
    width: 100%;
    height: 3em;
    border-radius: .35em;
    overflow: hidden;
    border: .1em solid transparent;


    button, input {
        outline: 0;
        border: 0;
        height: 100%;
        width: auto;

        &:hover,
        &:focus {
            outline: 0;
            border: 0;
        }
    }

    button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        min-width: 2.5em;
        font-size: 1.25em;
        padding: .5em;
        background-color: ${bgColors.theme};
        color: ${textColors.light};
        cursor: pointer;
        min-height: calc(100% + .05em);
    }
    input {
        width: calc(100% - 3em);
        padding: .5em;
        padding-left: 1em;
    }
`;