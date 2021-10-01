import data from '../../data'
import './homePage.css'
import { Link } from 'react-router-dom';
import React from "react";
import Tag from "../../components/HomeComponents/Tag"


const HomePage = ({ tagFilter, setTagFilter }) => {
  
    const isInTagFilter = (photographerTags) => {
        const found = tagFilter.some(r => photographerTags.includes(r))
        return found
    }

    return (
        
        <div className="page__table-position">
            {data.photographers.map(photographer => (
                <div>
                    {(isInTagFilter(photographer.tags) || tagFilter.length === 0)
                        ?   
                            <div key="homechild" className="page__columns-style">
                                <div className="page__columns-position">
                                    <div className="page__columns-items-position">
                                        <Link to={`/photographer/${photographer.id}`}><div className="page__portrait-style"><img className="page__portrait-dimensions"  src={`${process.env.PUBLIC_URL}/asset/photos/Photographers/${photographer.portrait}`} alt="portrait-photographe" /></div></Link>
                                        <Link className="page__name-link-style" to={`/photographer/${photographer.id}`}><div className="page__name-style">{photographer.name}</div></Link>
                                        <div className="page__city-style">{photographer.city}, {photographer.country}</div>
                                        <div className="page__citation-style">{photographer.tagline}</div>
                                        <div className="page__price-style">{photographer.price}€/jour</div>
                                        <div className="page__tags-style">
                                            {photographer.tags.map(tag => (
                                                <Tag key={tag} content={tag} setTagFilter={setTagFilter} />
                                            ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        :   <div key="home_child" className="page__columns-style-display">
                            </div>

                    }
                </div>
                ))
            }   
           
        </div>
       
       
    )
}
export default HomePage;