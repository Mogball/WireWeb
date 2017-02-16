import React, {Component} from 'react';

import './css/HomePanel.css';
import './css/materialize.css';

export default class HomePanel extends Component {
    constructor(props) {
        super(props);

        // Initialize state
        this.state = {
            // STUB data
            firstName: 'Emeritus',
            lastName: 'Pachementyke',
            balance: 3354743562,
            balancePoints: 235252
        }
    }
    render() {
        return (
            <div className="home-panel-section">
                <div className="home-info-panel">

                    <span>info panel</span>

                </div>
                <div className="home-items-panel">

                    <span>items panel</span>

                </div>
            </div>
        );
    }
}