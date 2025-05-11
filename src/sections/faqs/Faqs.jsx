import Accordion from "../../components/accordion";
import faqItems from "../../constants/faqs";

const Faqs = ({ items }) => {
    return (
        <Accordion items={faqItems} />
    )
}

export default Faqs;