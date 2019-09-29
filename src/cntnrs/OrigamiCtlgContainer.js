import React, { Component } from 'react';

/* Import Custom Components */
import HeaderBar from '../cmpnts/HeaderBar';

class OrigamiCtlgContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
            <div className="origami-catalogue-container">
                <div className="main-frame">

                    <HeaderBar/>

                </div>
			</div>
		);
	}
}

export default OrigamiCtlgContainer;
