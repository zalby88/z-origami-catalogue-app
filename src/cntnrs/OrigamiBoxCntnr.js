import React from 'react';

import OrigamiBox from '../cmpnts/OrigamiBox';

const OrigamiBoxCntnr = (props) => {
    return (
        <div className="box-container greyish-background">

            {props.origamis.map(singleOrigami => {
                return (
                    <OrigamiBox
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