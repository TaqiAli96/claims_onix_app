import ChipStar from "../../assets/svgs/chipStar";
import LeftLine from "../../assets/svgs/leftLine";
import RightLine from "../../assets/svgs/rightLine";
import Chip from "../chip";

const SectionHeading = ({ title }) => {
    return (
        <div className="flex flex-col md:flex-col lg:flex-row items-center gap-2">
            <LeftLine />
            <Chip Icon={<ChipStar />} content={title} className="md:px-5 p-8 py-1" />
            <RightLine />
        </div>
    )
}
export default SectionHeading;
