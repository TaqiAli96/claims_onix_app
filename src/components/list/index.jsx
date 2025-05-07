const List = ({ Icon, content, className }) => {
    return (
        <div className="flex gap-2 items-center">
        <div className="flex flex-col">
            {Icon}
            </div>
            <p className={className}>{content}</p>
        </div>
    )
}
export default List;