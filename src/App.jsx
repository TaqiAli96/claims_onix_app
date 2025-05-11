import Container from "./components/container";
import TopBar from "./components/topBar";
import Footer from './sections/footer';
import WrapperContainer from "./components/WrapperContainer";
import Modal from "./components/Modal";
import { useState } from "react";
import ContactForm from './components/ContactForm';
import { Element } from 'react-scroll';
import { sections } from "./constants/sections";
import ScrollToTop from './components/ScrollToTop';


const withScrollElement = (WrappedComponent, elementName) => {
  return (props) => (
    <Element name={elementName}>
      <section>
        <WrappedComponent {...props} />
      </section>
    </Element>
  );
};

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

  const handlers = {
    handleOpenModal,
    handleCloseModal,
    handleOpenScheduleModal,
    handleCloseScheduleModal,
    isScheduleModalOpen
  };

  return (
    <>
      <WrapperContainer>
        <Container>
          <TopBar />

          {sections.map(({ name, component: Component, props }) => {
            const WrappedComponent = withScrollElement(Component, name);
            return (
              <WrappedComponent
                key={name}
                {...(props ? props(handlers) : {})}
              />
            );
          })}

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
        <ScrollToTop />
      </WrapperContainer>
    </>
  );
}

export default App;
