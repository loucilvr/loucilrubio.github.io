import React from 'react';
import './Gallery.css'
import HackFSUImg from './Images/hackfsu2014.jpg'
import TallyImg from './Images/tallyfeature.jpg'
import GitImg from './Images/bootstrapgit.jpg'
import HackFSUImg15 from './Images/hackfsu2015-1.jpg'
import Leadership from './Images/leadership.jpg'
import HackFSU16 from './Images/hackfsu2016.jpg'
import Codeducation from './Images/codeducation.jpg'


const Gallery = () => {
    return (
        <div className="gallery">
            <img className="imgGallery" src={ HackFSUImg} />
            <img className="imgGallery" src={ TallyImg } />
            <img className="imgGallery" src={ GitImg } />
            <img className="imgGallery" src={ HackFSUImg15 } />
            <img className="imgGallery" src={ Leadership } />
            <img className="imgGallery" src={ HackFSU16 } />
            <img className="imgGallery" src={ Codeducation } />
            {/*<img className="imgGallery" src={'./../../assets/img/campus/hackfsu2016.jpg'} />*/}
            {/*<img className="imgGallery" src={'./../../assets/img/campus/leadership.jpg'} />*/}
            {/*<img className="imgGallery" src={'./../../assets/img/campus/gitworkshop.jpg'} />*/}
            {/*<img className="imgGallery" src={'./../../assets/img/campus/swamphacks.jpg'} />*/}
            {/*<img className="imgGallery" src={'./../../assets/img/campus/codeducation.jpg'} />*/}
        </div>
    )
};

export default Gallery;