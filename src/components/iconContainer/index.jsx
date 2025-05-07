import PropTypes from 'prop-types';

/**
 * IconContainer - A wrapper component for icons that allows custom styling and colors
 * @param {Object} props
 * @param {React.Component} props.Icon - The icon component to render
 * @param {string} props.className - Additional CSS classes for the container
 * @param {string} props.fillColor - Custom fill color for the icon
 * @param {number|string} props.id - Optional identifier for the icon
 */
const IconContainer = ({ Icon, className, fillColor, id }) => {
    const defaultFillColor = id === 3 ? "#3E9900" : undefined;
    const iconColor = fillColor || defaultFillColor;
    const width = id === 3 ? 23 : 15
    const height = id === 3 ? 23 : 15
    return (
        <div className={className}>
            <Icon fillColor={iconColor} width={width} height={height} />
        </div>
    );
};

IconContainer.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    className: PropTypes.string,
    fillColor: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

IconContainer.defaultProps = {
    className: '',
    fillColor: undefined,
    id: undefined
};

export default IconContainer;
