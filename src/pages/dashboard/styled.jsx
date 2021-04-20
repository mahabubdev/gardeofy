import styled from 'styled-components';
import { bgColors, textColors } from '../../components/GlobalStyledVars.js';

export const DashboardPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${bgColors.light};
    color: ${textColors.normal};
    padding: 3em 2.5em;
    box-shadow: 0 0 1.5em 0 rgba(0,0,0,0.025);
    border-radius: .3em;
`;

export const UserInfo = styled.div`
    display: flex;
    margin-top: 2em;
    gap: 1em 0;
    flex-direction: column;

    img {
        width: 80px;
        height: 80px;
        border-radius: .25em;
        border: .15em solid rgba(0,0,0,0.05);
    }
`;

export const RoleIndicator = styled.div`
    display: inline-flex;
    gap: 0 1em;

    span:last-child {
        text-transform: uppercase;
    }
`;

export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;



export const ReviewView = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0 1em;
    margin-top: 1em;
    gap: 1em 0;
    background-color: ${bgColors.extra2RGBA(.035)};
    border-radius: .35em;
    padding: 2.5em 2em;

    .user_bio {
        display: inline-flex;
        flex-basis: 150px;
        flex-direction: column;

        img {
            width: 80px;
            margin: 0 auto;
            border-radius: 50%;
        }
        h5 {
            margin: .3em 0;
            font-size: 1em;
            font-weight: 600;
        }
    }
    .review_text {
        flex-basis: 60%;
        p {
            font-size: 1.25em;
            color: ${textColors.gray};
        }
    }
`;


export const ReviewForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0 1em;
    margin-top: 2em;
    gap: 1em 0;
    background-color: ${bgColors.extra2RGBA(.035)};
    border-radius: .35em;
    padding: 2.5em 2em;

    textarea, button {
        outline: 0;
        border: 0;
        &:hover {
            outline: 0;
            border: 0;
        }
    }

    textarea {
        background-color: ${bgColors.extra2RGBA(.05)};
        min-height: 10em;
        padding: 1em;
    }

    button[type="submit"] {
        padding: 1em 0;
        display: inline-block;
        max-width: 120px;
        background-color: ${bgColors.extra2RGBA(.85)};
        box-shadow: 0 0 1em 0 ${bgColors.extra2RGBA(.25)};
        color: ${textColors.light};
        border-radius: .35em;
        text-transform: uppercase;
        transition: all .3s ease-in;

        &:hover {
            background-color: ${bgColors.extra2RGBA(1)};
            box-shadow: 0 0 1em 0 ${bgColors.extra2RGBA(.5)};
        }
    }
`;


export const OrderPageHeader = styled.div`
    display: flex;
`;




export const OrderPageShowcase = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    gap: 1.5em 0;

    .services_container {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(auto-fit, 320px);
        gap: 1.5em;
        padding: 1.5em;
        background-color: ${bgColors.extra2RGBA(.1)};
    }
`;



export const ServiceCard = styled.div`
    display: flex;
    width: 100%;
    background-color: ${bgColors.light};
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding: 2em 1.5em;
    border-radius: .5em;
    box-shadow: 0 0 3em 0 rgba(0,0,0,0.025);
    overflow: hidden;
    margin-bottom: 1em;

    h4 {
        font-size: 1.5em;
        margin-bottom: 1em;
        text-transform: capitalize;
    }
    span:first-child {
        font-size: 3.5em;
        text-transform: uppercase;
        color: ${textColors.theme};
        text-align: center;
    }


    .btn {
        display: inline-flex;
        margin-top: .5em;
        margin: 1em auto;
        padding: 1em 2.5em;
        background-color: ${bgColors.theme};
        color: ${textColors.light};
        border-radius: .3em;
        box-shadow: 0 0 1.5em 0 rgba(0,0,0,.15);
        text-transform: capitalize;
        cursor: pointer;
        transition: all .2s ease-in;

        &:hover {
            transform: translateY(-.1em);
            box-shadow: 0 0 1.5em 0 ${bgColors.themeHighRGBA(.35)};
        }
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
        span:first-child {
            font-size: 1.25em;
        }
    }
`;



export const AddServiceForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1em 0;
    background-color: ${bgColors.extra1RGBA(.25)};
    border-radius: .3em;
    padding: 3em 2em;

    .form_err {
        background-color: rgba(255,0,0,0.1);
        padding: .3em;
        color: red;
        width: 100%;
        max-width: 500px;
    }

    input, textarea {
        border: 0;
        outline: 0;
        background-color: ${bgColors.extra2RGBA(.05)};
        padding: 1em 1.5em;
        border-radius: .35em;
        width: 100%;
        max-width: 500px;
    }

    textarea {
        min-height: 150px;
    }

    button[type="submit"] {
        width: 90%;
        margin: 1em 0;
        max-width: 120px;
    }
`;


export const CheckoutArea = styled.div`


    .Form {
        display: flex;
        flex-direction: column;
        gap: 1em 0;

        button {
            padding: 1em 0;
            text-transform: capitalize;
            background-color: ${bgColors.extra2RGBA(.75)};
            color: ${textColors.light};
            border: 0;
            outline: 0;
            max-width: 300px;
            border-radius: .3em;
        }

        .FormGroup {
            display: flex;
            width: 100%;
            flex-direction: column;

            .FormRow {
                display: flex;
                width: 100%;
                padding: .5em .5em;

                label {
                    width: 20%;
                    max-width: 80px;
                    text-align: left;
                }
                input {
                    padding: .5em .5em .5em .85em;
                    min-width: 50%;
                    max-width: 500px;
                }

                .StripeElement {
                    color: red !important;
                    fill: red;
                    background-color: red;
                }
            }
        }
    }


    .card_input {
        padding: 1em;
        &::placeholder {
            color: ${bgColors.extra2RGBA(.9)} !important;
        }

        width: 100%;
        max-width: 500px;
    }


    .service_info {
        padding: 1em;
        background-color: ${bgColors.extra2RGBA(.05)};
        color: ${bgColors.extra2};
        border-radius: .35em;
        font-weight: 600;
    }
`;




export const OrdersUserContainer = styled.div`
    display: grid;
    width: 100%;
    place-items: center;
    margin-top: 1em;
    gap: 1.5em;
    background-color: ${bgColors.extra1RGBA(.1)};
    grid-template-columns: repeat(auto-fit, 300px);
`;


export const OrderOfUser = styled.div`
    display: flex;
    width: 100%;
    max-width: 300px;
    flex-direction: column;
    background-color: ${bgColors.extra2RGBA(.15)};
    color: #262626;
    padding: 1.5em 1em;
    border-radius: .35em;
    box-shadow: 0 0 1.5em 0 rgba(0,0,0,0.05);

    .card_bdy {
        padding: 1em 0;

        p {
            font-size: .8em;
        }
    }

    .card_top {
        display: flex;
        justify-content: space-between;

        span {
            text-transform: capitalize;
            padding: .5em;
            border-radius: .3em;
        }

        ._pen {
            background-color: ${bgColors.lite};
        }
        ._ogn {
            background-color: ${bgColors.theme};
            color: ${textColors.light}
        }
        ._dn {
            background-color: ${bgColors.extra2};
            color: ${textColors.light}
        }
    }
`;