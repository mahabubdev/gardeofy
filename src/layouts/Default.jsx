import HeaderArea from '../components/Header';
import { PageWrapper } from './Styled';
import FooterArea from '../components/Footer/';

function DefaultLayout ({ children }) {
    return (
        <>
            <HeaderArea />
                <PageWrapper>
                    { children }
                </PageWrapper>
            <FooterArea />
        </>
    )
}

export default DefaultLayout;