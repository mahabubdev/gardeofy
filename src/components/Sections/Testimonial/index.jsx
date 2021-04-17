import { TestimonialCard, TestimonialSectionContainer, TestimonialWrap } from "./styled";
import Carousel from 'react-elastic-carousel';
import { FaQuoteLeft } from 'react-icons/fa';


// fake data clients
import c1 from '../../../images/clients/client-1.png';
import c2 from '../../../images/clients/client-2.png';
import c3 from '../../../images/clients/client-3.png';
import c4 from '../../../images/clients/client-4.png';



const reviews = [
    {
        id: 'x8923vhkasd',
        feedback: 'The owners of a corporation have limited liability and the business has a separate legal personality from its owners. Corporations can be either government-owned or privately owned.',
        client: {
            name: 'Mike Jones',
            profession: 'Manager',
            photo: c1,
        },
    },
    {
        id: 'x3kjahi8asfk0',
        feedback: 'The owners of a corporation have limited liability and the business has a separate legal personality from its owners. Corporations can be either government-owned or privately owned.',
        client: {
            name: 'Mike Carson',
            profession: 'Founder',
            photo: c2,
        },
    },
    {
        id: 'x82dhijy678w',
        feedback: 'The owners of a corporation have limited liability and the business has a separate legal personality from its owners. Corporations can be either government-owned or privately owned.',
        client: {
            name: 'Jane Smith',
            profession: 'Sn. Doctor',
            photo: c3,
        },
    },
    {
        id: 'x3j86jagdi3d',
        feedback: 'The owners of a corporation have limited liability and the business has a separate legal personality from its owners. Corporations can be either government-owned or privately owned.',
        client: {
            name: 'Sarah Smith',
            profession: 'Sn. Engineer',
            photo: c4,
        },
    },
];


const TestimonialSection = () => {

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 800, itemsToShow: 2},
    ];

    return (
        <TestimonialWrap id='testimonials'>
            <TestimonialSectionContainer>
                <small>few testimonials</small>
                <h2>Whats clients saying</h2>

                <Carousel 
                    breakPoints={breakPoints}
                    itemsToScroll={1}
                >
                    {
                        reviews.map(rv => (
                            <div key={rv.id}>
                                <TestimonialCard>
                                    <div className="top_part">
                                        <span className="qicon">
                                            <FaQuoteLeft />
                                        </span>
                                        <p>{rv.feedback}</p>
                                    </div>
                                    <div className="bottom_part">
                                        <div className="img">
                                            <img src={rv.client.photo} alt="client" />
                                        </div>
                                        <div className="client">
                                            <h4>{rv.client.name}</h4>
                                            <small>{rv.client.profession}</small>
                                        </div>
                                    </div>
                                </TestimonialCard>
                            </div>
                        ))
                    }
                </Carousel>
            </TestimonialSectionContainer>
        </TestimonialWrap>
    )
}

export default TestimonialSection;