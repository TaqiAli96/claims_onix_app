import PropTypes from 'prop-types';

const Card = ({
    IconContainer,
    title,
    description,
    className = '',
    titleClassName = '',
    descriptionClassName = ''
}) => {
    return (
        <article
            className={`rounded-xl border-1 border-[#2E2E1F1F] flex flex-col gap-4 p-6 ${className}`}
            aria-labelledby={`card-title-${title}`}
        >
            <div className="flex-shrink-0">
                {IconContainer}
            </div>
            <h2
                id={`card-title-${title}`}
                className={`text-xl font-semibold ${titleClassName}`}
            >
                {title}
            </h2>
            <p className={`text-base ${descriptionClassName}`}>
                {description}
            </p>
        </article>
    );
};

Card.propTypes = {
    IconContainer: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    className: PropTypes.string,
    titleClassName: PropTypes.string,
    descriptionClassName: PropTypes.string
};

export default Card;