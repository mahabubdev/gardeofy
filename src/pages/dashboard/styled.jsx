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