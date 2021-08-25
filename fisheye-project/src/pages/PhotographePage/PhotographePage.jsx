import React from "react";
import './photographePage.css'
import { DetailsBand } from "../../components/DetailsBand";
import { FilterPhotos } from "../../components/FilterPhotos";
import {PhotosAlbum} from "../../components/PhotosAlbum";
import { InfosBand } from "../../components/InfosBand";


/* import { BrowserRouter as  Link } from 'react-router-dom'; */
/* import React from "react"; */

const PhotographePage = () => {
   
    return (
        <div className ="page__content-position">
            <DetailsBand/>
            <FilterPhotos/>
            <PhotosAlbum/>
            <div className ="page__info-band-position">
                <InfosBand/>
            </div>
        </div>
        
    )
}
export default PhotographePage;
