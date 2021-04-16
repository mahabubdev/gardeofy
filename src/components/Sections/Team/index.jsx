import { TeamSectionContainer, TeamSectionWrap, TeamItem } from "./styled";
import Carousel from 'react-elastic-carousel';


// static purpose
import g1 from '../../../images/gardener-1.jpg';
import g2 from '../../../images/gardener-2.jpg';
import g3 from '../../../images/gardener-3.jpg';
import g4 from '../../../images/gardener-4.jpg';
import g5 from '../../../images/gardener-5.jpg';
import g6 from '../../../images/gardener.jpg';


const TeamSection = () => {

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
        {width: 850, itemsToShow: 3},
    ];

    const stuffs = [
        {
            id: 'x8uyasbhsf',
            name: 'Smith Devon',
            position: 'Gardenist',
            photo: g1
        },
        {
            id: 'x69qndjdhs',
            name: 'Julia Kisty',
            position: 'Gardenist',
            photo: g2
        },
        {
            id: 'x0uahdadad',
            name: 'P. Johnson',
            position: 'Gardenist',
            photo: g3
        },
        {
            id: 'x5ajsdhalfn',
            name: 'Anowar Khan',
            position: 'Gardenist',
            photo: g4
        },
        {
            id: 'x2kafoadjf',
            name: 'Angelina Swift',
            position: 'Gardenist',
            photo: g5
        },
        {
            id: 'x6nu293bf',
            name: 'David Puth',
            position: 'Gardenist',
            photo: g6
        }
    ];

    return (
        <TeamSectionWrap>
            <TeamSectionContainer>
                <small>team members</small>
                <h2>Our trained staff</h2>

                <Carousel 
                    breakPoints={breakPoints}
                    autoPlaySpeed={2500}
                    enableAutoPlay={true}
                    itemsToScroll={1}
                >
                    {
                        stuffs.map(st => (
                            <TeamItem key={st.id} style={{
                                backgroundImage: `url("${st.photo}")`,
                            }}>
                                <div>
                                    <h4>{st.name}</h4>
                                    <p>{st.position}</p>
                                </div>
                            </TeamItem>
                        ))
                    }
                </Carousel>
            </TeamSectionContainer>
        </TeamSectionWrap>
    )
}

export default TeamSection;