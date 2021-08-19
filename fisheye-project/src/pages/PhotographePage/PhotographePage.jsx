
import DetailsBand from '../../components/DetailsBand/DetailsBand';
import FiltrerPhotos from '../../components/FlitrerPhotos/FiltrerPhotos'
import Header from '../../components/Header';
import './photographePage.css'
/* import { BrowserRouter as  Link } from 'react-router-dom'; */
/* import React from "react"; */


const PhotographePage = () => (
    <div className ="page__content-position">
        <Header/>
        <DetailsBand/>
        <FiltrerPhotos/>
        
    </div>
)
export default PhotographePage;
