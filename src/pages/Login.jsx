import LoginFormArea from "../components/Forms/login";
import { PageWrapper, PageContainer } from "../components/Forms/styled";
import SignInSvg from '../images/sign_in_svg.svg';

const LoginPage = () => {
    return (
        <PageWrapper>
            <PageContainer>
                <div className="page_content">
                    <img src={SignInSvg} alt="sign-in" />
                </div>
                <LoginFormArea />
            </PageContainer>
        </PageWrapper>
    )
}

export default LoginPage;