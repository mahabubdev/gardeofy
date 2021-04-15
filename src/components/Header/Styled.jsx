import styled from 'styled-components';
import { textColors, bgColors } from '../GlobalStyledVars';


export const Header = styled.header`
    display: flex;
    flex-direction: column;
    background-color: ${bgColors.light};
    color: ${textColors.normal};
    box-shadow: 0 0 2.5em 0 rgba(0,0,0,0.05);
    border-bottom: 2px solid rgba(0,0,0,0.025);
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0;
    width: 80%;
    margin: 0 auto;
    padding: 0;
    max-width: 1500px;
    padding: 1em 0;
`;

export const HeaderTopbar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 3em;
    border-bottom: .1em solid ${bgColors.themeRGBA(.05)};
    padding: .5em 0;
    background-color: ${bgColors.themeRGBA(.02)};
    color: ${textColors.gray};

    span {
        display: inline-flex;
        align-items: center;
        gap: 0 .25em;
        font-size: .85em;
        cursor: pointer;
    }
`;

export const LogoArea = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    .logo {
        font-size: 2.25em;
        font-weight: 600;
        text-transform: capitalize;
        height: 100%;
        object-fit: cover;
        width: auto;
        margin: 0;
        color: ${textColors.normal};

        .dot {
            color: ${textColors.theme};
            font-size: 1.25em;
        }
    }
`;

export const MenuArea = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0 .3em;

    .menus, .btns_menu {
        display: flex;
        align-items: center;
        list-style: none;
        gap: 0 .1em;

        a {
            text-decoration: none;
            text-transform: uppercase;
            font-size: 1em;
            color: ${textColors.normal};
            padding: .85em 1.5em;
        }
    }

    .btns_menu {

        gap: 0 1.5em;

        a {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            background-color: ${bgColors.light};
            color: ${textColors.normal};
            outline: 0;
            border: 0;
            border-radius: .25em;
            border: 2px solid ${bgColors.theme};
            box-shadow: 0 0 .5em 0 ${bgColors.themeRGBA(.3)};

            &.marked {
                background-color: ${bgColors.theme};
                color: ${textColors.light};
            }

            &:hover {
                background-color: ${bgColors.themeHigh};
                box-shadow: 0 0 .5em 0 ${bgColors.themeRGBA(.5)};
                color: ${textColors.light};
            };
        };
    }
`;