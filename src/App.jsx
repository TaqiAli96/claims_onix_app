import Container from "./components/container";
import TopBar from "./components/topBar";
import faqItems from './constants/faqs';
import Footer from './sections/footer';
import AboutUs from "./sections/aboutUs";
import ClaimOnix from "./sections/claimOnix";
import Services from "./sections/services";
import ContactUs from "./sections/contactUS";
import WrapperContainer from "./components/WrapperContainer";
import Modal from "./components/Modal";
import { useState } from "react";
import ContactForm from './components/ContactForm';
import { Element } from 'react-scroll';
import Faqs from "./sections/faqs/Faqs";
import Home from "./sections/home/Home";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenScheduleModal = () => {
    setIsScheduleModalOpen(true);
  };

  const handleCloseScheduleModal = () => {
    setIsScheduleModalOpen(false);
  };

  return (
    <>

      <WrapperContainer>
        <Container>
          <TopBar />

          <Element name="home">
            <Home onOpenModal={handleOpenModal} onOpenScheduleModal={handleOpenScheduleModal} />
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
            <section><ContactUs onOpenModal={handleOpenScheduleModal} onClose={handleCloseScheduleModal} isModalOpen={isScheduleModalOpen} /></section>
          </Element>

          <Element name="faqs">
            <section>
              <Faqs items={faqItems} />
            </section>
          </Element>

          <section className="mb-10">
            <Footer />
          </section>
        </Container>

        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Let's Talk Revenue Results"
          description="Whether you're ready to start or just exploring, we're here to answer your questions."
        >
          <ContactForm onClose={handleCloseModal} />
        </Modal>
      </WrapperContainer>
    </>
  );
}

export default App;
