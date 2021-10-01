import React, {useState} from "react";
import './photographePage.css'
import { BandCard } from "../../components/PhotographeComponents/ProfilPhotographer/BandCard";
import { FilterAlbum } from "../../components/PhotographeComponents/Album/FilterAlbum";
import { PhotosAlbum } from "../../components/PhotographeComponents/Album/PhotosAlbum";
import { CotationBand } from "../../components/PhotographeComponents/ProfilPhotographer/CotationBand";
import {useParams} from "react-router-dom";
import data from '../../data'


/* import { BrowserRouter as  Link } from 'react-router-dom'; */
/* import React from "react"; */

const PhotographePage = () => {
    let { id } = useParams();
    const [activeFilter, setActiveFilter] = useState('Popularité')
    const photographer = data.photographers.find(user => user.id == id)
    const photos = data.media.filter(photo => photo.photographerId == id)
    const [likes, setLikes] = useState(photos.reduce((acc, photo) => {
        acc += photo.likes
        return acc
    }, 0))
    const incrementGlobalLike = () => {
        setLikes(likes + 1)
    }

    const photosSorted = photos.sort((a, b) => {
        if(activeFilter === 'Popularité') {
            return b.likes - a.likes
        } else if(activeFilter === 'Date') {
            return b.date - a.date
        } else if(activeFilter === 'Titre') {
            return a.title.localeCompare(b.title)
        }
        return photosSorted
    })

    return (
        <div className ="page__content-position">
            <BandCard photographer={photographer}/>
            <FilterAlbum activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
            <PhotosAlbum incrementGlobalLike={incrementGlobalLike} photosSorted={photosSorted} photos={photos}/>
            <CotationBand price={photographer.price} likes={likes}/>
        </div>
        
    )
}
export default PhotographePage;
