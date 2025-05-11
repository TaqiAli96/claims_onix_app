import IconContainer from "../../components/iconContainer";
import Card from "../../components/card";
import SectionHeading from "../../components/sectionHeading";
import claimonixDetails from "../../constants/claimonixDetails";
import { Helmet } from 'react-helmet';

// Animation utility for staggered fade-in
const fadeInUp = (index) => ({
    animation: `fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both`,
    animationDelay: `${index * 0.13 + 0.1}s`
});

const ClaimOnix = () => {
    return (
        <section className="flex flex-col gap-2 w-full items-center py-10  overflow-x-hidden">
            <Helmet>
                <title>Why ClaimsOnix - Full-cycle RCM Solution</title>
                <meta name="description" content="ClaimsOnix offers comprehensive Revenue Cycle Management solutions. Not just another billing service, but a full-cycle RCM partner." />
            </Helmet>

            <SectionHeading title={'Why ClaimsOnix?'} />
            <h1
                className="text-3xl md:text-5xl font-inter-500 leading-tight text-center flex flex-col px-4 fade-in-down"
                style={{
                    animationName: 'fadeInDown',
                    animationDuration: '0.7s',
                    animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                    animationFillMode: 'both',
                    animationDelay: '0.05s'
                }}
            >
                <span>Full-cycle RCM. Not just another</span>
                <span> billing service</span>
            </h1>

            <div className="flex flex-col gap-4 px-4 md:px-24 w-full max-w-7xl mx-auto py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-stretch">
                    {claimonixDetails.slice(0, 2).map((item, index) => (
                        <div
                            key={`card-${index}`}
                            style={fadeInUp(index)}
                            className="transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl h-full flex flex-col"
                        >
                            <Card
                                className="bg-white/80 border border-[#E6E6E6] rounded-2xl shadow-md transition-shadow duration-300 h-full flex flex-col p-4 md:p-10"
                                titleClassName="text-[#286200] text-lg md:text-xl font-inter-500"
                                descriptionClassName="text-sm font-inter-300"
                                title={item.title}
                                description={item.description}
                                IconContainer={
                                    <IconContainer
                                        className="rounded-full border-1 border-[#2E2E1F1F] bg-white p-2 flex justify-center items-center w-fit"
                                        Icon={item.Icon}
                                    />
                                }
                            />
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
                    {claimonixDetails.slice(2).map((item, index) => (
                        <div
                            key={`card-${index + 2}`}
                            style={fadeInUp(index + 2)}
                            className="transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl h-full flex flex-col"
                        >
                            <Card
                                className="bg-white/80 border border-[#E6E6E6] rounded-2xl shadow-md transition-shadow duration-300 h-full flex flex-col p-4 md:p-10"
                                titleClassName="text-[#286200] text-lg md:text-xl font-inter-500"
                                descriptionClassName="text-sm font-inter-300"
                                title={item.title}
                                description={item.description}
                                IconContainer={
                                    <IconContainer
                                        className="rounded-full border-1 border-[#2E2E1F1F] bg-white p-2 flex justify-center items-center w-fit"
                                        Icon={item.Icon}
                                    />
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Animation keyframes */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translate3d(0, 40px, 0);
                    }
                    to {
                        opacity: 1;
                        transform: none;
                    }
                }
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translate3d(0, -30px, 0);
                    }
                    to {
                        opacity: 1;
                        transform: none;
                    }
                }
            `}</style>
        </section>
    )
}
export default ClaimOnix;