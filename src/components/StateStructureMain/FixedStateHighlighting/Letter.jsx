/* eslint-disable react/prop-types */
import './Letter.css';
const Letter = ({
    letter,
    isHighlighted,
    onHover,
    onToggleStar,
}) => {
    return (
        <li
            className={isHighlighted ? 'highlighted' : ''}
            onMouseOver={() => onHover(letter.id)}
        >
            <button onClick={() => onToggleStar(letter.id)}>
                {letter.isStarred ? 'notStarred' : 'Starred'}
            </button>
            {letter.subject}
        </li>
    );
};

export default Letter;