import React, { Component } from 'react';
import './css/MainCatalogue.css';
import './css/HeaderBar.css';
import './css/SingleOrigamiBox.css';
import './css/OrigamiBoxCntnr.css';

import OrigamiCtlgContainer from './cntnrs/OrigamiCtlgContainer';

class App extends Component {
    render() {

        return (
            <OrigamiCtlgContainer />
        );
    }
}

export default App;