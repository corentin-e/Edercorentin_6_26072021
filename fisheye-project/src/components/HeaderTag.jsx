import './header.css';
import data from './data_tags'

const HeaderTag = () => (
    <div className="header__tags-position-items">
        {data.tags.map(tag => (
            <div className="header__tags-style">
                #{tag.name}
            </div>
        ))
        }
    </div>
)
export default HeaderTag;