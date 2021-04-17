import { BannerSectionWrap, BannerContentWrap, BannerPersonPhoto } from './styled';
import { Link } from 'react-router-dom';
import { NormalContainer } from '../../GlobalStyled';

import bannerImg from '../../../images/noah-buscher-x8ZStukS2PM-unsplash.jpg';
import bannerPerson from '../../../images/girl-for-banner-removebg-preview.png';

const HomeBannerSection = () => {
    return (
        <BannerSectionWrap style={{
            backgroundImage: `url("${bannerImg}")`,
        }} id='home'>
            <NormalContainer>
                <BannerContentWrap>
                    <div className="banner_texts">
                        <h2>find professional</h2>
                        <h1>Green Gardener</h1>
                        <p>
                            <Link className="btn" to="/contact">contact now</Link>
                        </p>
                    </div>

                    <BannerPersonPhoto>
                        <img src={bannerPerson} alt="gardener" />
                    </BannerPersonPhoto>
                </BannerContentWrap>
            </NormalContainer>
        </BannerSectionWrap>
    )
}

export default HomeBannerSection;