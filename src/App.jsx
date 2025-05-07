import { Helmet } from 'react-helmet';
import Container from "./components/container";
import TopBar from "./components/topBar";
import faqItems from './constants/faqs';
import Footer from './sections/footer';
import HeroSection from "./components/HeroSection";
import CertificationSection from "./components/certificationSection";
import AboutUs from "./sections/aboutUs";
import ClaimOnix from "./sections/claimOnix";
import Services from "./sections/services";
import Schedule from "./sections/schedule";
import Accordion from "./components/accordion";
import ContactUs from "./sections/contactUS";
import WrapperContainer from "./components/WrapperContainer";

function App() {
  return (
    <WrapperContainer>
      <Helmet>
        <title>ClaimsOnix - Full-cycle RCM Solution</title>
        <meta name="description" content="ClaimsOnix offers comprehensive Revenue Cycle Management solutions. Transform your healthcare revenue cycle with our full-cycle RCM services." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://claimsonix.com" />
      </Helmet>

      <Container>
        <TopBar />
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
      </Container>
    </WrapperContainer>
  );
}

export default App;
