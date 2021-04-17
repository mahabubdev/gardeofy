import styled from 'styled-components';
import { textColors, bgColors } from '../GlobalStyledVars';


export const Header = styled.header`
    display: flex;
    flex-direction: column;
    background-color: ${bgColors.light};
    color: ${textColors.normal};
    box-shadow: 0 0 2.5em 0 rgba(0,0,0,0.05);
    border-bottom: 2px solid rgba(0,0,0,0.025);

    &.fixed_top {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        overflow-x: hidden;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    overflow-x: hidden;
    justify-content: space-between;
    align-items: center;
    gap: 0;
    width: 80%;
    margin: 0 auto;
    max-width: 1500px;
    padding: 1em 0;

    .menu_switch {
        display: none;
        justify-content: flex-end;
        align-items: center;
        font-size: 1.75em;
        padding: .5rem 1rem;
        cursor: pointer;
    }

    @media only screen and (max-width: 1199.9px) {
        .menu_switch {
            display: flex;
        }
    }

    @media only screen and (max-width: 767.9px) {
        width: 96%;
        padding: .25em;
    }
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

    @media only screen and (max-width: 767.9px) {
        display: none;
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

        @media only screen and (max-width: 767.9px) {
            font-size: 1.5em;
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

        a, span {
            text-decoration: none;
            text-transform: uppercase;
            font-size: 1em;
            color: ${textColors.normal};
            padding: .85em 1.5em;
            cursor: pointer;
        }
    }

    .btns_menu {

        gap: 0 1.5em;

        a, span {
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

        li img {
            border-radius: 50%;
            width: 60px;
            height: 60px;
            border: .2em solid ${bgColors.themeRGBA(.25)};
        }
    }


    @media only screen and (max-width: 1199.9px) {
        display: none;

        .btns_menu, .menus {
            display: none;
        }
    }


    &.mobile_menu {
        display: flex;
        position: fixed;
        flex-direction: column;
        top: 0;
        right: 0;
        width: 300px;
        height: 100%;
        background-color: red;
        color: white;
        z-index: 9;

        .btns_menu, .menus {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
        }
    }
`;




export const MobileMenuWrapper = styled.div`
    display: block;
    visibility: hidden;
    position: fixed;
    top: 0;
    right: -301px;
    width: 100%;
    max-width: 320px;
    height: 100%;
    background-color: ${bgColors.lite};
    padding: 1em;
    z-index: 999;
    overflow: hidden;
    transition: all .35s ease;

    @keyframes opening_menu {
        from {right: -300px}
        to {right: 0}
    }

    &.active {
        right: 0;
        visibility: visible;
        animation: opening_menu .3s;
    }

    span:first-child {
        display: flex;
        width: 100%;
        padding: .25em 0;
        margin-bottom: .5em;
        font-size: 2.5em;
        color: ${textColors.normal};
        svg {
            cursor: pointer;
        }
    }

    .mobile_menu {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 89%;
        background-color: transparent;

        .menus {
            display: flex;
            width: 100%;
            padding-left: 1em;
            flex-direction: column;
            gap: 2em 0;

            a {
                display: block;
                font-size: 1em;
                text-transform: capitalize;
            }
        }

        .btns_menu {
            display: flex;
            width: 100%;
            flex-direction: column;
            gap: .5em 0;
            position: absolute;
            bottom: 0;
            left: 0;

            a {
                display: block;
                background-color: ${bgColors.theme};
                color: ${textColors.light};
                width: 100%;
                padding: 1em 0;
                text-align: center;
                text-transform: uppercase;
            }

            
        }
    }
`;