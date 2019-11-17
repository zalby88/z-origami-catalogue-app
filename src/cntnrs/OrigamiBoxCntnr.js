import React from 'react';

import SingleOrigamiBox from '../cmpnts/SingleOrigamiBox';

const OrigamiBoxCntnr = (props) => {
    return (
        <div className="box-container greyish-background">

            {props.origamis.map(singleOrigami => {
                return (
                    <SingleOrigamiBox
                        key={singleOrigami.id}
                        id={singleOrigami.id}
                        name={singleOrigami.name}
                        author={singleOrigami.author}
                        difficulty={singleOrigami.difficulty} />
                );
            })}
        </div>)
}


export default OrigamiBoxCntnr;