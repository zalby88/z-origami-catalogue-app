import React from 'react';

import imageNotAvailable from '../origami_img/image_not_available.png';


const SingleOrigamiBox = (props) => {
    return (
        <div className="single-box-min">
            <div className="image-section">
                <img src={imageNotAvailable} />
            </div>
            <div className="details-section">
                <ul className="dot-leaders">
                    <li style={{ display: "none" }}>
                        <span>Id</span>
                        <span><b>{props.id}</b></span>
                    </li>
                    <li>
                        <span>Name</span>
                        <span><b>{props.name}</b></span>
                    </li>
                    <li>
                        <span>Author</span>
                        <span><b>{props.author}</b></span>
                    </li>
                    <li>
                        <span>Difficulty</span>
                        <span><b>{props.difficulty}</b></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SingleOrigamiBox;