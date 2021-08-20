import React, { useState } from "react";
import './photographePage.css'
import {useParams} from "react-router-dom";
import data from '../../data'

/* import { BrowserRouter as  Link } from 'react-router-dom'; */
/* import React from "react"; */


const PhotographePage = () => {
    let { id } = useParams();
        const [activeFilter, setActiveFilter] = useState('likes')

    console.log(data)
    const photographer = data.photographers.find(user => user.id == id)
    const photos = data.media.filter(photo => photo.photographerId == id)


    const photosSorted = photos.sort((a, b) => {
        if(activeFilter === 'likes') {
            return b.likes - a.likes
        }
    })
    console.log(photos)
    console.log(photosSorted)



    return (
        <div className ="page__content-position">
            {id}
            <span>active filter: {activeFilter}</span>
            <button onClick={() => setActiveFilter('likes')}>likes</button>
            <button onClick={() => setActiveFilter('titre')}>Titre</button>



            {photosSorted.map((photo) => (
                <span>{photo.likes}</span>
            ))

            }
            {/*
        <DetailsBand/>
        <FiltrerPhotos/>
        */}
        </div>
    )
}
export default PhotographePage;
