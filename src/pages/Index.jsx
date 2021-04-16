import DefaultLayout from '../layouts/Default';
import HomeBannerSection from '../components/Sections/HomeBanner';
import MissionSection from '../components/Sections/Mission';
import ServiceSection from '../components/Sections/Services';

const HomePage = () => {
    return (
        <DefaultLayout>
            <HomeBannerSection />
            <MissionSection />
            <ServiceSection />
        </DefaultLayout>
    )
}

export default HomePage;