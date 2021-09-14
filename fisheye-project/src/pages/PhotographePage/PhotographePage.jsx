import React, {useState, text} from "react";
import './photographePage.css'
import { ProfilPhotographerBand } from "../../components/ProfilPhotographerBand";
import { FilterPhotos } from "../../components/FilterPhotos";
import {PhotosAlbum} from "../../components/PhotosAlbum";
import { LikesPricesBand } from "../../components/LikesPricesBand";
import {useParams} from "react-router-dom";
import data from '../../data'


/* import { BrowserRouter as  Link } from 'react-router-dom'; */
/* import React from "react"; */

const PhotographePage = () => {
    const [activeFilter, setActiveFilter] = useState('Popularité')
    let { id } = useParams();
    const photographer = data.photographers.find(user => user.id == id)
    const photos = data.media.filter(photo => photo.photographerId == id)

    const photosSorted = photos.sort((a, b) => {
        if(activeFilter === 'Popularité') {
            return b.likes - a.likes
        } else if(activeFilter === 'Date') {
            return b.date - a.date
        } else if(activeFilter === 'Titre') {
            return a.title.localeCompare(b.title)
        }
    })

    console.log(activeFilter)

    return (
        <div className ="page__content-position">
            <ProfilPhotographerBand photographer={photographer}/>
            <FilterPhotos activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
            <PhotosAlbum photosSorted={photosSorted}/>
            <LikesPricesBand price={photographer.price} likes={photographer.likes}/>
        </div>
        
    )
}
export default PhotographePage;
