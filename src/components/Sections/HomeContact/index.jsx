import { ContactFormSectionContainer, ContactFormSectionWrap, Features, FeatureItem, Wrapper, ContactForm } from "./styled";
import { GiMoonOrbit } from 'react-icons/gi';
import { SiMinutemailer } from 'react-icons/si';
import { IoBulbOutline } from 'react-icons/io5';
import { RiCustomerService2Line } from 'react-icons/ri';

const ContactFormSection = () => {
    return (
        <ContactFormSectionWrap id='contact'>
            <ContactFormSectionContainer>
                <small>contact us</small>
                <h2>Why Most of The People Choose Us</h2>
                <Wrapper>
                    <Features>
                        <p>
                        Duis eleifend molestie leo, at mollis eros rutrum sit amet. Nam venenatis enim at magna euismod congue. Fusce semper malesuada purus. Credibly reintermediate backend ideas for cross-platform models continually reintermediate.
                        </p>

                        <div className="features_items">
                            <FeatureItem>
                                <span className="icon">
                                    <GiMoonOrbit />
                                </span>

                                <div className="texts">
                                    <h5>available 24/7</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                </div>
                            </FeatureItem>

                            <FeatureItem>
                                <span className="icon">
                                    <SiMinutemailer />
                                </span>

                                <div className="texts">
                                    <h5>free quotation</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                </div>
                            </FeatureItem>

                            <FeatureItem>
                                <span className="icon">
                                    <IoBulbOutline />
                                </span>

                                <div className="texts">
                                    <h5>creative ideas</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                </div>
                            </FeatureItem>

                            <FeatureItem>
                                <span className="icon">
                                    <RiCustomerService2Line />
                                </span>

                                <div className="texts">
                                    <h5>customer focused</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                </div>
                            </FeatureItem>
                        </div>
                    </Features>

                    <ContactForm autoComplete='off'>
                        <h2>Free Estimate</h2>

                        <input name="name" placeholder="Enter your full-name" />
                        <input name="email" placeholder="Enter your email-address" />
                        <input name="phone" placeholder="Enter your phone number" />
                        <textarea name="message" placeholder="Write your message"></textarea>

                        <button type="submit" className="btn-submit">submit</button>
                    </ContactForm>
                </Wrapper>
            </ContactFormSectionContainer>
        </ContactFormSectionWrap>
    )
}

export default ContactFormSection;