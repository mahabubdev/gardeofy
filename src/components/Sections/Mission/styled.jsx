import styled from 'styled-components';
import { NormalContainer } from '../../GlobalStyled';
import { bgColors, textColors } from '../../GlobalStyledVars';


export const MissionSectionWrap = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
`;

const MissionContainer = styled.div`
    display: flex;
`;
export const MissionSectionContainer = ({ children }) => {
    return (
        <NormalContainer>
            <MissionContainer>
                { children }
            </MissionContainer>
        </NormalContainer>
    )
}