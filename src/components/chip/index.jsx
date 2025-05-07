const Chip = ({ Icon, content, className }) => {
    return (
        <div className={`flex gap-2 bg-[#E6FFD4] text-[#276100] items-center font-inter-300 text-sm md:text-base rounded-2xl ${className}`}>
            {Icon}
            <p>{content}</p>
        </div>
    )
}
export default Chip;
