import { Link } from 'react-router-dom';
import {Header, HeaderContainer, HeaderTopbar, LogoArea, MenuArea } from './Styled';
import { IoPhonePortraitOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from 'react';


const HeaderArea = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const togMenu = () => setToggleMenu(! toggleMenu);

    // return
    return (
        <Header>
            <HeaderTopbar>
                <span>
                    <IoPhonePortraitOutline />
                    <span>+880 9696 209784</span>
                </span>
                <span>
                    <IoMailOutline />
                    <span>info@gardeofy.com</span>
                </span>
                <span>
                    <IoLocationOutline />
                    <span>
                    956 Wellington Street, Toronto, CA
                    </span>
                </span>
            </HeaderTopbar>
            <HeaderContainer>
                <LogoArea>
                    <Link to='/'>
                    <span className="logo">grandeofy<span className="dot">.</span></span>
                    </Link>
                </LogoArea>

                <MenuArea className={toggleMenu ? 'mobile_menu' : ''}>
                    <span className="menu_switch" onClick={togMenu}>
                        { toggleMenu ? <CgClose /> : <CgMenu /> }
                    </span>

                    <ul className="menus">
                        <li>
                            <Link to='/'>home</Link>
                        </li>
                        <li>
                            <Link to='/services'>services</Link>
                        </li>
                        <li>
                            <Link to='/projects'>projects</Link>
                        </li>
                    </ul>

                    <ul className="btns_menu">
                        <li>
                            <Link to='/contact'>get a quote</Link>
                        </li>
                        <li>
                            <Link to='/login' className="marked">sign in</Link>
                        </li>
                    </ul>
                </MenuArea>
            </HeaderContainer>
        </Header>
    )
}

export default HeaderArea;