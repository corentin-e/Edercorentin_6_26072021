import data from '../../data'
import './photographeList.css'
import { Link } from 'react-router-dom';
import React from "react";
import Tag from "../../components/Tag"


const PhotographeList = () => (
    <div className="page__grid-style">
        {data.photographers.map(photographer => (
            <div className="page__grid-position">
                {console.log(photographer)}
                <div className="page__columns">
                    <div className="page__columns-style">
                        <Link to={`/photographer/${photographer.id}`}><div className="page__portrait-style"><img className="page__portrait-dimensions"  src={`${process.env.PUBLIC_URL}/asset/photos/Photographers/${photographer.portrait}`} alt="portrait-photographe" /></div></Link>
                        <Link className="page__name-link-style" to={`/photographer/${photographer.id}`}><div className="page__name-style">{photographer.name}</div></Link>
                        <div className="page__city-style">{photographer.city}, {photographer.country}</div>
                        <div className="page__citation-style">{photographer.tagline}</div>
                        <div className="page__price-style">{photographer.price}€/jour</div>
                        <div className="page__tags-style">
                            {photographer.tags.map(tag => (
                                <Tag key={tag} content={tag} />
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            ))
        }
        
    </div>
    
)
export default PhotographeList;
