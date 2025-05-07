import HeroSection from "./HeroSection";
import CertificationSection from "./certificationSection";
import AboutUs from "../sections/aboutUs";
import ClaimOnix from "../sections/claimOnix";
import Services from "../sections/services";
import Schedule from "../sections/schedule";
import Accordion from "./accordion";
import ContactUs from "../sections/contactUS";
import Footer from "../sections/footer";
import faqItems from '../constants/faqs';

const MainContent = () => {
    return (
        <>
            <HeroSection />

            <section className="my-5">
                <CertificationSection />
            </section>

            <section className="">
                <AboutUs />
            </section>

            <section className="my-5">
                <ClaimOnix />
            </section>

            <section className="my-5">
                <Services />
            </section>

            <section className="my-10">
                <Schedule />
            </section>

            <Accordion items={faqItems} />

            <section className="">
                <ContactUs />
            </section>

            <section className="mb-10">
                <Footer />
            </section>
        </>
    );
};

export default MainContent; 