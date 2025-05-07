import SectionHeading from '../sectionHeading';

const SectionFaqHeader = () => (
    <div className="flex flex-col items-center mb-8 mt-2">
        <SectionHeading title="FAQs" />
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
            <span>Have a question? We're</span>
            <span> here to help.</span>
        </h1>
        <p className="mt-2 text-[#2E2E1F] text-center text-base md:text-lg font-inter-300 max-w-2xl">
            Let's discuss how I can help you save time, reduce denials, and increase collections.
        </p>
        <style>{`
      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
    </div>
);

export default SectionFaqHeader; 