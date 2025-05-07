const ChevronUp = ({ className = "" }) => {
    return (
        <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 ${className}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5l4-4 4 4"
            />
        </svg>
    );
};

export default ChevronUp;