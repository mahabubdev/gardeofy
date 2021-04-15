import { FooterWrapper, FooterContainer, FooterContentWrap, FooterCol, NewsLetter } from './styled';
import { Link } from 'react-router-dom';
import { IoCheckmarkCircleOutline, IoCloseCircleOutline, IoPhonePortraitOutline, IoMailOutline, IoLocationOutline } from 'react-icons/io5';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { HiOutlineChevronRight } from "react-icons/hi";

import footerBgImg from '../../images/johny-goerend-tLceZsxzTU4-unsplash.jpg';

const FooterArea = () => {
    return (
        <FooterWrapper>
            <FooterContentWrap style={{backgroundImage: `url("${footerBgImg}")`}}>
                <FooterContainer>
                    <div className="footer_brand">
                        <div>
                            <span className="logo">grandeofy<span className="dot">.</span></span>
                        </div>
                        <ul>
                            <li>
                                <Link to='//facebook.com/mahabub6333' target='_blank'>
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to='//twitter.com/mahabub723405' target='_blank'>
                                    <FaTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link to='//hackerrank.com/mahabubdev' target='_blank'>
                                    <FaHackerrank />
                                </Link>
                            </li>
                            <li>
                                <Link to='//linkedin.com/in/mahabub2000/' target='_blank'>
                                    <FaLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link to='//instagram.com/mahabub_74/' target='_blank'>
                                    <FaInstagram />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <FooterCol>
                        <h3>find us</h3>
                        <ul>
                            <li>
                                <span><IoLocationOutline /></span>
                                <span>Grandeofy LC.</span>
                            </li>
                            <li>
                                <span><IoLocationOutline /></span>
                                <span>956 Wellington Street, <br/> Toronto, Canada</span>
                            </li>
                            <li>
                                <span><IoPhonePortraitOutline /></span>
                                <span>+880 9696 209784</span>
                            </li>
                            <li>
                                <span><IoMailOutline /></span>
                                <span>info@grandeofy.com</span>
                            </li>
                        </ul>
                    </FooterCol>

                    <FooterCol>
                        <h3>opening hours</h3>
                        <ul>
                            <li>
                                <span><IoCheckmarkCircleOutline /></span>
                                <span>Mon - Tue: 10:00 - 18:00</span>
                            </li>
                            <li>
                                <span><IoCheckmarkCircleOutline /></span>
                                <span>Wed – Thur: 10.00 – 17.00</span>
                            </li>
                            <li>
                                <span><IoCheckmarkCircleOutline /></span>
                                <span>Fri – Sat: 10.00 – 14.00</span>
                            </li>
                            <li>
                                <span><IoCheckmarkCircleOutline /></span>
                                <span>Saturday: 10.00 – 12.00</span>
                            </li>
                            <li>
                                <span><IoCloseCircleOutline /></span>
                                <span>Sunday: Closed</span>
                            </li>
                        </ul>
                    </FooterCol>

                    <FooterCol>
                        <h3>newsletter</h3>
                        <p>
                            Stay connected with us. You can subscribe our newsletters here. Just send us your email address.
                        </p>
                        <NewsLetter autoComplete='off'>
                            <input name='newsletter' placeholder='Enter your email address' />
                            <button type='submit'>
                                <HiOutlineChevronRight />
                            </button>
                        </NewsLetter>
                    </FooterCol>
                </FooterContainer>
            </FooterContentWrap>


            <div className="credit_bar">
                <FooterContainer>
                    <p style={{ textAlign: 'center' }}>
                        &copy; All rights reserved and copyrighted by
                        <Link to='//github.com/mahabubdev/' target='_blank'> @mahabubdev</Link>
                    </p>
                </FooterContainer>
            </div>
        </FooterWrapper>
    )
}

export default FooterArea;