const Badge = ({
  content = "default",
  color = "#276100",
  background = "#fff",
}) => {
  return (
    <span
      className="sm:text-xs font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full"
      style={{ color, backgroundColor: background }}
    >
      {content}
    </span>
  );
};
export default Badge;
