import { ServiceSectionContainer, ServiceCardsWrap, ServiceCard } from './styled';
import { GiThreeLeaves } from 'react-icons/gi';


const ServiceSection = () => {
    return (
        <ServiceSectionContainer>
            <small>our services</small>
            <h2>What kind of services we are offering</h2>

            <ServiceCardsWrap>
                <ServiceCard>
                    <span><GiThreeLeaves /></span>
                    <div className="service_info">
                        <h4>design & planting</h4>
                        <p>
                            Duis eleifend molestie leo, at mollis eros rutrum. Duis eleifend molestie leo, at mollis eros rutrum.
                        </p>
                    </div>
                </ServiceCard>


                <ServiceCard>
                    <span><GiThreeLeaves /></span>
                    <div className="service_info">
                        <h4>soil preparation</h4>
                        <p>
                            Duis eleifend molestie leo, at mollis eros rutrum. Duis eleifend molestie leo, at mollis eros rutrum.
                        </p>
                    </div>
                </ServiceCard>


                <ServiceCard>
                    <span><GiThreeLeaves /></span>
                    <div className="service_info">
                        <h4>watering & irrigation</h4>
                        <p>
                            Duis eleifend molestie leo, at mollis eros rutrum. Duis eleifend molestie leo, at mollis eros rutrum.
                        </p>
                    </div>
                </ServiceCard>

                <ServiceCard>
                    <span><GiThreeLeaves /></span>
                    <div className="service_info">
                        <h4>lawn & garden care</h4>
                        <p>
                            Duis eleifend molestie leo, at mollis eros rutrum. Duis eleifend molestie leo, at mollis eros rutrum.
                        </p>
                    </div>
                </ServiceCard>

                <ServiceCard>
                    <span><GiThreeLeaves /></span>
                    <div className="service_info">
                        <h4>stone & hard scaping</h4>
                        <p>
                            Duis eleifend molestie leo, at mollis eros rutrum. Duis eleifend molestie leo, at mollis eros rutrum.
                        </p>
                    </div>
                </ServiceCard>


                <ServiceCard>
                    <span><GiThreeLeaves /></span>
                    <div className="service_info">
                        <h4>spring & fall cleanup</h4>
                        <p>
                            Duis eleifend molestie leo, at mollis eros rutrum. Duis eleifend molestie leo, at mollis eros rutrum.
                        </p>
                    </div>
                </ServiceCard>

            </ServiceCardsWrap>
        </ServiceSectionContainer>
    )
}

export default ServiceSection;