import styled from 'styled-components';
import { bgColors, textColors } from '../GlobalStyledVars';



export const TableWrapper = styled.div`
    padding-top: 1.5em;
    overflow-x: scroll;
    /* width */
    ::-webkit-scrollbar {
        height: .5em;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 .3em ${bgColors.themeHighRGBA(.5)}; 
        border-radius: .25em;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${bgColors.theme}; 
        border-radius: .25em;
    }

    ._on, ._off {
        padding: .35em;
        font-size: .7em;
        border-radius: .15em;
    }
    ._on {background-color: ${bgColors.themeHighRGBA(.2)}; color: ${textColors.theme};}
    ._off {background-color: rgba(255,0,0,0.2); color: red;}

    table {
        display: table;
        width: 100%;
        min-width: 992px;
        border-radius: .3em;
        background-color: ${bgColors.themeRGBA(.05)};

        th, td {
            padding: .5em;
        }
        th {
            color: ${textColors.normal};
        }
        td {
            &:nth-child(2) {
                text-align: center;
            }

            &:nth-child(3) {
                word-wrap: wrap;
                max-width: 50%;
                min-height: 3em;
            }

            &:nth-last-child() {
                text-align: right;
            }
        }
    }
`;


export const TableHead = styled.thead`
    background-color: ${bgColors.themeRGBA(.05)};
`;


export const TableBody = styled.tbody`
    td {
        background-color: transparent;
        &:nth-child(n+1) {
            background-color: ${bgColors.extra2RGBA(.05)};
        }
    }

    ._pn, ._cm, ._on {
                display: inline-flex;
                margin: 0 auto;
                font-size: .85em;
                padding: .3em;
                background-color: rgba(125,0,0,0.09);
                color: ${textColors.gray};
                border-radius: .2em;
                cursor: pointer;
            }
            ._cm {
                background-color: ${bgColors.extra2RGBA(.15)};
                color: ${bgColors.extra2};
            }
            ._on {
                background-color: ${bgColors.themeRGBA(.15)};
                color: ${textColors.theme};
            }





    .manage_row {
        display: flex;

            span {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                margin: 0 .3em;
                font-size: 1.25em;
                padding: .25em;
                background-color: rgba(125,0,0,0.1);
                color: ${textColors.normal};
                border-radius: .2em;
                cursor: pointer;
            }

            ._del {
                background-color: rgba(255,0,0,0.1);
                color: red;
            }

            ._edit {
                background-color: ${bgColors.extra2RGBA(.1)};
                color: blue;
            }

            ._set{
                background-color: rgba(125, 225, 0, 0.25);
                color: ${textColors.theme};
            }


            
        }
`;