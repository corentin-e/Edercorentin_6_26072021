import React, {useState, text} from "react";
import './photographePage.css'
import { BandCard } from "../../components/PhotographeComponents/ProfilPhotographer/BandCard";
import { FilterAlbum } from "../../components/PhotographeComponents/Album/FilterAlbum";
import { PhotosAlbum } from "../../components/PhotographeComponents/Album/PhotosAlbum";
import { CotationBand } from "../../components/PhotographeComponents/ProfilPhotographer/CotationBand";
import {useParams} from "react-router-dom";
import data from '../../data'
import { ButtonContact } from "../../components/PhotographeComponents/ContactTools/ButtonContact";


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
            <BandCard photographer={photographer}/>
            <FilterAlbum activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
            <PhotosAlbum photosSorted={photosSorted} photos={photos}/>
            <CotationBand price={photographer.price} likes={photographer.likes}/>
        </div>
        
    )
}
export default PhotographePage;
