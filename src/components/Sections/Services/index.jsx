import { ServiceSectionContainer, ServiceCardsWrap, ServiceSectionWrap, ServiceCard } from './styled';
import { GiThreeLeaves } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import { API_SERVER } from '../../../config';


const ServiceSection = () => {

    const [services, setServices] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        async function fetchAll (){
            await fetch(API_SERVER + '/api/service?status=1', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => {
                if (res.errCode) {
                    //errors
                    console.log(res.errors);
                    setLoaded(true);
                }
                else {
                    setServices(res);
                    setLoaded(true);
                }
            })
            .catch(err => {
                console.log(err);
                setLoaded(true);
            })
        };
        if (! loaded) {
            fetchAll();
        }
    }, [loaded])
    
    return (
        <ServiceSectionWrap id='services'>
            <ServiceSectionContainer>
            <small>our services</small>
            <h2>What kind of services we are offering</h2>

            <ServiceCardsWrap>
                {
                    loaded ? (
                        services.length > 0 ?
                        (
                            services.map(srv => (
                                <ServiceCard key={srv.uid}>
                                    <span><GiThreeLeaves /></span>
                                    <div className="service_info">
                                        <h4>{srv.name}</h4>
                                        <p>{srv.description}</p>
                                    </div>
                                </ServiceCard>
                            ))
                        ) : (
                            <p>No service is available right now</p>
                        )
                    ) : (null)
                }
            </ServiceCardsWrap>
        </ServiceSectionContainer>
        </ServiceSectionWrap>
    )
}

export default ServiceSection;