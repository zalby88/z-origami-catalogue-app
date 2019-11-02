import React, { Component } from 'react';

/* Import Custom Components */
import HeaderBar from '../cmpnts/HeaderBar';
import OrigamiBox from '../cmpnts/OrigamiBox';
import OrigamiBoxCntnr from '../cntnrs/OrigamiBoxCntnr';

class OrigamiCtlgContainer extends Component {

    static get ORIGAMI_SERVICE_URL() {
        return "/zalbygoesapi/origamis";
    }

	constructor(props) {
		super(props);

        // Initial State
        this.state = {
            "errors": null,
            "origamis": []
        };

        this.retrieveOrigamisFromService();  
	}

    render() {
		return (
            <div className="origami-catalogue-container">
                <div className="main-frame">

                    <HeaderBar />

                    <OrigamiBoxCntnr origamis={this.state.origamis} />
                </div>
			</div>
		);
    }

    retrieveOrigamisFromService() {
        let httpStatus = 0
        fetch( OrigamiCtlgContainer.ORIGAMI_SERVICE_URL, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        })
        .then(response => {
            httpStatus = response.status
            return response.json()
        })
        .then(responseBody => {
            switch (httpStatus) {
                case 200:
                    var jsonText = JSON.stringify(responseBody);

                    // Set the retrieved origami in the state
                    this.setState(
                        {
                            'errors': null,
                            'origamis': JSON.parse(jsonText)
                        })
                    break

                case 404:
                    console.log('Resource Not Found, Configuration Error')
                    this.setState({ 'errors': 'Ooops, Something went wrong' })
                    break
                case 500:
                    console.log('Internal Server Error')
                    this.setState({ 'errors': 'Ooops, Something went wrong' })
                    break
                default:
                    console.log('unhandled')
                    break
            }
        })
        .catch(err => {
            console.error(err)
        })
    }
}

export default OrigamiCtlgContainer;
