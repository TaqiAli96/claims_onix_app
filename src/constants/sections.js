import AboutUs from "../sections/aboutUs";
import ClaimOnix from "../sections/claimOnix";
import ContactUs from "../sections/contactUS";
import Faqs from "../sections/faqs/Faqs";
import Home from "../sections/home/Home";
import services from "../sections/services";
import faqItems from "./faqs";

 export const sections = [
  {
    name: "home",
    component: Home,
    props: (handlers) => ({
      onOpenModal: handlers.handleOpenModal,
      onOpenScheduleModal: handlers.handleOpenScheduleModal
    })
  },
  {
    name: "about",
    component: AboutUs
  },
  {
    name: "why choose us",
    component: ClaimOnix
  },
  {
    name: "services",
    component: services
  },
  {
    name: "contact",
    component: ContactUs,
    props: (handlers) => ({
      onOpenModal: handlers.handleOpenScheduleModal,
      onClose: handlers.handleCloseScheduleModal,
      isModalOpen: handlers.isScheduleModalOpen
    })
  },
  {
    name: "faqs",
    component: Faqs,
    props: () => ({
      items: faqItems
    })
  }
];