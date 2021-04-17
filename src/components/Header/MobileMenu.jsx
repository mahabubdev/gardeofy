import { MobileMenuWrapper } from "./Styled";
import { CgClose } from "react-icons/cg";
import { Link as Lnk } from 'react-scroll';
import { Link } from 'react-router-dom';
import { useAuthHook } from "../../context/auth";

const MobileMenu = ({ closer, status }) => {

    const { isAuthenticated } = useAuthHook();

    return (
        <MobileMenuWrapper
            className={status ? 'active' : ''}
        >
            <span>
                <CgClose onClick={closer} />
            </span>

            <div className="mobile_menu">
                    <ul className="menus">
                        <li>
                            <Link to='/'>home</Link>
                        </li>
                        <li>
                            <Lnk spy={true} to='services'>services</Lnk>
                        </li>
                        <li>
                            <Lnk spy={true} to='testimonials'>testimonials</Lnk>
                        </li>
                        <li>
                            <Lnk spy={true} to='contact'>contact</Lnk>
                        </li>
                    </ul>

                    <ul className="btns_menu">
                        <li>
                            {/* <Link to='#contact'>get a quote</Link> */}
                            <Lnk spy={true} to='contact'>get a quote</Lnk>
                        </li>
                        {/* <li>
                            <Link to='/login' className="marked">sign in</Link>
                        </li> */}

                        {
                            isAuthenticated ? (
                                <li>
                                    <span className="marked">logout</span>
                                </li>
                            ) : (
                                <li>
                                    <Link to='/login' className="marked">sign in</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
        </MobileMenuWrapper>
    )
}

export default MobileMenu;