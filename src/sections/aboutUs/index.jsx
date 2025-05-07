import SectionHeading from "../../components/sectionHeading";
import List from "../../components/list";
import CheckIcon from "../../assets/svgs/checkIcon";
import Applogo from "../../assets/pngs/AppLogo.png";

const AboutUs = () => {
    return (
        <section
            aria-labelledby="about-heading"
            className="flex flex-col md:flex-row gap-8 px-2 md:px-4 lg:px-6 mx-2 md:mx-10 py-10"
            style={{
                background: "linear-gradient(120deg, #f8fff5 60%, #e6ffd4 100%)",
                minHeight: "70vh"
            }}
        >
            <article className="flex flex-col gap-8 flex-1">
                <SectionHeading title="About Us" />
                <h2
                    id="about-heading"
                    className="text-3xl md:text-5xl font-inter-500 leading-tight relative pb-2"
                >
                    You're Not Just Outsourcing a Task—<br />
                    You're Partnering With a Strategist.
                    <span className="block w-16 h-1 bg-[#296600] rounded-full absolute left-0 bottom-0 animate-underline" />
                </h2>
                <div className="flex flex-col gap-2 text-[#4C4C4C] font-inter-400 text-base md:text-lg">
                    <p>
                        With over a decade of hands-on experience in medical billing, coding, and RCM optimization,
                        I've helped healthcare organizations—from solo providers to multi-location practices—achieve
                        clarity, compliance, and faster reimbursements.
                    </p>
                    <p>
                        We serve independent providers, specialty clinics, and multi-provider groups across the U.S.,
                        offering:
                    </p>

                    <ul className="space-y-2">
                        {[
                            "Systems Proficiency: Epic, eClinicalWorks, Athena, AdvancedMD, Charm, OfficeAlly, NextGen",
                            "Data Fluent: CPT, ICD-10, HCPCS, NDC, LOINC, SNOMED, and more",
                            "Experience Across: Behavioral health, internal medicine, surgical practices, labs, urgent care, and more"
                        ].map((content, idx) => (
                            <li
                                key={idx}
                                className="transition-all duration-300 hover:scale-105 hover:bg-[#e6ffd4]/60 rounded-lg"
                                style={{
                                    opacity: 1,
                                    transform: "none",
                                    transition: "all 0.3s cubic-bezier(.4,2,.6,1)"
                                }}
                            >
                                <List
                                    Icon={<CheckIcon fillColor="#3E9900" />}
                                    content={content}
                                />
                            </li>
                        ))}
                    </ul>

                    <blockquote
                        className="text-[#2C6C01] text-base md:text-lg font-inter-400 py-6 md:py-10 italic border-l-4 border-[#296600] pl-4 bg-[#f6fff0]/60 rounded-lg"
                    >
                        With ClaimsOnix, your billing is no longer a burden — it becomes a growth engine.
                    </blockquote>
                </div>
            </article>

            <aside
                className="flex flex-col gap-2 rounded-2xl mt-10 border-1 border-[#296600] md:sticky md:top-4 py-5 w-full md:w-[350px] h-fit glass-card slide-in-right"
                aria-labelledby="core-values-heading"
            >
                <div className="px-2 md:px-12 flex justify-center items-center">
                    <img
                        src={Applogo}
                        alt="ClaimsOnix Logo"
                        width="200"
                        height="200"
                        loading="lazy"
                        className="w-28 h-28 md:w-40 md:h-40 object-contain"
                    />
                </div>
                <div className="px-3 md:px-4 flex flex-col gap-4">
                    <h3
                        id="core-values-heading"
                        className="text-[#276100] font-inter-500 text-2xl md:text-3xl"
                    >
                        Our Core Values
                    </h3>
                    <ul className="space-y-2">
                        {[
                            "Integrity – Doing the right thing, every time.",
                            "Accuracy – Precision is at the heart of our process.",
                            "Efficiency – We streamline billing so you can do more with less.",
                            "Transparency – Clear reports, open communication, and zero guesswork."
                        ].map((content, idx) => (
                            <li
                                key={idx}
                                className="transition-all duration-300 hover:scale-105 hover:bg-[#e6ffd4]/60 rounded-lg"
                            >
                                <List
                                    Icon={<CheckIcon fillColor="#276100" />}
                                    content={content}
                                    className="text-[#276100] text-sm md:text-base font-inter-400"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
            {/* Animation keyframes and glass effect */}
            <style>{`
                .glass-card {
                    background: rgba(255,255,255,0.7);
                    box-shadow: 0 8px 32px 0 rgba(44,108,1,0.08);
                    backdrop-filter: blur(2px);
                    border: 1px solid rgba(41,102,0,0.08);
                }
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(60px);
                    }
                    to {
                        opacity: 1;
                        transform: none;
                    }
                }
                .slide-in-right {
                    animation: slideInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
                }
                @keyframes underline {
                    from { width: 0; }
                    to { width: 4rem; }
                }
                .animate-underline {
                    animation: underline 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
                }
            `}</style>
        </section>
    );
};

export default AboutUs;
