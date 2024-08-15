
import PropTypes from 'prop-types';


// eslint-disable-next-line react/prop-types
export function Square ({ children, isSelected, updateBoard, index }) {

    const className = `square ${isSelected ? 'is-selected': ''}`;

    const handleClick = () => {
      updateBoard(index);
    }

    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
}

Square.PropTypes = {
    children: PropTypes.node.isRequired,
    isSelected: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    updateBoard: PropTypes.func.isRequired,
}