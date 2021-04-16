import DefaultLayout from '../layouts/Default';
import HomeBannerSection from '../components/Sections/HomeBanner';
import MissionSection from '../components/Sections/Mission';

const HomePage = () => {
    return (
        <DefaultLayout>
            <HomeBannerSection />
            <MissionSection />
        </DefaultLayout>
    )
}

export default HomePage;