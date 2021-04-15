import HeaderArea from '../components/Header';
import { PageWrapper } from './Styled';
import { NormalContainer } from '../components/GlobalStyled';
import FooterArea from '../components/Footer/';

function DefaultLayout ({ children }) {
    return (
        <>
            <HeaderArea />
            <NormalContainer>
                <PageWrapper>
                    { children }
                </PageWrapper>
            </NormalContainer>
            <FooterArea />
        </>
    )
}

export default DefaultLayout;