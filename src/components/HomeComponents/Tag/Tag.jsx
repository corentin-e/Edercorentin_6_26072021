import "./tag.css"

const Tag = ({content, onClick, isActive}) => (
    <button className={`${isActive ? "header__tags-style-active" : "header__tags-style" }`}  onClick={(e) => onClick && onClick(content)}>
        #{content}
    </button>
)
export default Tag;

