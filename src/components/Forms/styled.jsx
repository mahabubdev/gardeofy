import styled from 'styled-components';
import { bgColors, textColors } from '../GlobalStyledVars.js';



export const PageWrapper = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background: ${bgColors.extra1};
    color: ${textColors.normal};
    width: 100%;
    min-height: 100vh;
`;

export const PageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    min-height: 70vh;
    background: ${bgColors.lite};
    border-radius: .75em;
    box-shadow: 0 0 1em 0 rgba(0,0,0,0.05);
    overflow: hidden;

    .page_content {
        display: flex;
        width: 50%;
        align-items: center;
        justify-content: center;
        padding: 2em;

        img {
            width: 100%;
            max-width: 100%;
            height: auto;
            object-fit: cover;
        }
    }


    @media only screen and (max-width: 1099.9px) {
        width: 100%;
        max-width: 400px;

        .page_content {
            display: none;
        }
    }
`;



export const FormArea = styled.form`
    display: flex;
    width: 50%;
    max-width: 450px;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1em 0;
    background: ${bgColors.extra2};
    color: ${textColors.light};
    padding: 2em;
    margin: 0;

    h1 {
        position: relative;
        display: block;
        margin-bottom: 1em;

        &:before {
            display: block;
            content: '';
            position: absolute;
            bottom: -.5em;
            left: 0;
            width: 100%;
            /* max-width: 60px; */
            height: .15em;
            background-color: ${bgColors.light};
            opacity: .2;
        }
    }

    button, input {
        border: 0;
        outline: 0;
        border-radius: .35em;

        &:hover {
            border: 0;
            outline: 0;
        }
    }


    input {
        background-color: ${bgColors.extra1RGBA(.15)};
        padding: .85em .85em .85em 1.7em;
        color: ${textColors.light};

        &::placeholder {
            color: ${textColors.light};
            opacity: .6;
        }
    }

    button[type="submit"] {
        padding: .85em 0;
        text-transform: capitalize;
        font-size: 1em;
    }

    .oauth {
        display: flex;
        flex-direction: column;
        gap: 1em 0;
        margin-top: 1em;
    }

    .oauth_item {
        display: flex;
        gap: 0 20%;
        align-items: center;
        text-transform: capitalize;
        padding: .7em 1em;
        background-color: ${bgColors.extra1RGBA(.2)};
        border-radius: .35em;
        cursor: pointer;

        span:first-child {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            max-width: 60px;
        }
    }

    p {
        margin-top: 1em;
        a {
            color: white;
            text-decoration: underline;
        }
    }

    span.form_err {
        font-size: .75em;
        background-color: rgba(255,0,0, 0.25);
        padding: .25em;
        color: white;
    }

    input.form_err {
        &::placeholder {
            color: red;
        }
    }


    @media only screen and (max-width: 1099.9px) {
        width: 100%;
        max-width: inherit;
        gap: 1.5em 0;
    }

    @media only screen and (max-width: 419.9px) {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        padding: 2em 1em;
    }
`;