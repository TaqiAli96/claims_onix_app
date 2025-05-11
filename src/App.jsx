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
import Accordion from "./components/accordion";
import ContactUs from "./sections/contactUS";
import WrapperContainer from "./components/WrapperContainer";
import Modal from "./components/Modal";
import { useState } from "react";
import ContactForm from './components/ContactForm';
import { Element } from 'react-scroll';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

        <Element name="home">
          <HeroSection onOpenModal={handleOpenModal} />
        </Element>


        <Element name="about">
          <section><AboutUs /></section>
        </Element>

        <Element name="why choose us">
          <section><ClaimOnix /></section>
        </Element>

        <Element name="services">
          <section><Services /></section>
        </Element>

        <Element name="contact">
          <section><ContactUs /></section>
        </Element>

        <Element name="faqs">
          <section>   
          <Accordion items={faqItems} /></section>
        </Element>




        <section className="mb-10">
          <Footer />
        </section>
      </Container>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Let’s Talk Revenue Results"
        description="Whether you’re ready to start or just exploring, we’re here to answer your questions."
      >

        <ContactForm />
      </Modal>
    </WrapperContainer>
  );
}

export default App;
