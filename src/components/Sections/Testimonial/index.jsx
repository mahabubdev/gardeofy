import { TestimonialCard, TestimonialSectionContainer, TestimonialWrap } from "./styled";
import Carousel from 'react-elastic-carousel';
import { FaQuoteLeft } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { API_SERVER } from '../../../config';

const TestimonialSection = () => {

    const [reviews, setReviews] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (! loaded) {
            fetch(API_SERVER + '/api/review')
            .then(res => res.json())
            .then(res => {
                setReviews(res);
                console.log("reviews===>", res)
                setLoaded(true);
            })
            .catch(err => {
                console.log(err)
            })
        }
    }, [loaded]);

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 800, itemsToShow: 2},
    ];

    return (
        <TestimonialWrap id='testimonials'>
            <TestimonialSectionContainer>
                <small>few testimonials</small>
                <h2>Whats clients saying</h2>

                {
                    loaded ? 
                    (<Carousel 
                    breakPoints={breakPoints}
                    itemsToScroll={1}
                    >
                    {
                        reviews.map(rv => (
                            <div key={rv.uid}>
                                <TestimonialCard>
                                    <div className="top_part">
                                        <span className="qicon">
                                            <FaQuoteLeft />
                                        </span>
                                        <p>{rv.description}</p>
                                    </div>
                                    <div className="bottom_part">
                                        <div className="img">
                                            <img src={rv.user.photo} alt="client" />
                                        </div>
                                        <div className="client">
                                            <h4>{rv.user.name}</h4>
                                            <small>{rv.user.role}</small>
                                        </div>
                                    </div>
                                </TestimonialCard>
                            </div>
                        ))
                    }
                </Carousel>) : (
                        <p>No feedbacks yet</p>
                    )
                }

            </TestimonialSectionContainer>
        </TestimonialWrap>
    )
}

export default TestimonialSection;