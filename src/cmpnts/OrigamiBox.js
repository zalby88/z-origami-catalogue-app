import React from 'react';


const OrigamiBox = (props) => {
    return (
        <div className="single-box-min">
            <div style={{display: "none"}}>
                <span>Id:</span><span>{props.id}</span>
            </div>
            <div>
                <span>Name:</span><span>{props.name}</span>
            </div>
            <div>
                <span>Author:</span><span>{props.author}</span>
            </div>
            <div>
                <span>Difficulty:</span><span>{props.difficulty}</span>
            </div>
        </div>
    )
}

export default OrigamiBox;