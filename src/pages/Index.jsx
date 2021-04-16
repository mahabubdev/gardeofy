import DefaultLayout from '../layouts/Default';
import HomeBannerSection from '../components/Sections/HomeBanner';
import MissionSection from '../components/Sections/Mission';
import ServiceSection from '../components/Sections/Services';
import TeamSection from '../components/Sections/Team';

const HomePage = () => {
    return (
        <DefaultLayout>
            <HomeBannerSection />
            <MissionSection />
            <ServiceSection />
            <TeamSection />
        </DefaultLayout>
    )
}

export default HomePage;