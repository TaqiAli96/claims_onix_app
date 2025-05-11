import HeroSection from "../../components/HeroSection";
import PropTypes from 'prop-types';

const Home = ({ onOpenModal, onOpenScheduleModal }) => {
    return (
        <HeroSection onOpenModal={onOpenModal} onOpenScheduleModal={onOpenScheduleModal} />
    )
}

Home.propTypes = {
    onOpenModal: PropTypes.func.isRequired,
    onOpenScheduleModal: PropTypes.func.isRequired
};

export default Home;
