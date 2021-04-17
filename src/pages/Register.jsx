import RegisterFormArea from "../components/Forms/register";
import { PageWrapper, PageContainer } from "../components/Forms/styled";
import JoinSvg from '../images/join_svg.svg';

const RegisterPage = () => {
    return (
        <PageWrapper>
            <PageContainer>
                <div className="page_content">
                    <img src={JoinSvg} alt="sign-in" />
                </div>
                <RegisterFormArea />
            </PageContainer>
        </PageWrapper>
    )
}

export default RegisterPage;