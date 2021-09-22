import "./tag.css"

const Tag = ({content, onClick, isActive}) => (
    <div className={`${isActive ? "header__tags-style-active" : "header__tags-style" }`}  onClick={(e) => onClick(content)}>
        #{content}
    </div>
)
export default Tag;