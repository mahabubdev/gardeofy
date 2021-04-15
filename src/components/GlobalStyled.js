import styled from 'styled-components';

export const NormalContainer = styled.div`
    display: block;
    width: 80%;
    max-width: 1500px;
    margin: 0 auto;
    padding: .05em;

    @media only screen and (max-width: 767.9px) {
        width: 96%;
        padding: .25em;
    }
`;