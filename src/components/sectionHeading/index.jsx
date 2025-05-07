import ChipStar from "../../assets/svgs/chipStar";
import LeftLine from "../../assets/svgs/leftLine";
import RightLine from "../../assets/svgs/rightLine";
import Chip from "../chip";

const SectionHeading = ({ title }) => {
    return (
        <div className="flex items-center gap-2">
            <LeftLine />
            <Chip Icon={<ChipStar />} content={title} className="md:px-5 py-1" />
            <RightLine />
        </div>
    )
}
export default SectionHeading;
