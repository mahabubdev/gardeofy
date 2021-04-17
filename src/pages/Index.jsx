import DefaultLayout from '../layouts/Default';
import HomeBannerSection from '../components/Sections/HomeBanner';
import MissionSection from '../components/Sections/Mission';
import ServiceSection from '../components/Sections/Services';
import TeamSection from '../components/Sections/Team';
import TestimonialSection from '../components/Sections/Testimonial';
import ContactFormSection from '../components/Sections/HomeContact';

const HomePage = () => {
    return (
        <DefaultLayout>
            <HomeBannerSection />
            <MissionSection />
            <ServiceSection />
            <TeamSection />
            <TestimonialSection />
            <ContactFormSection />
        </DefaultLayout>
    )
}

export default HomePage;