import React, {Component} from 'react';
import './css/MenuPanel.css';
import './css/materialize.css';

import AccountPanel from './AccountPanel';

export default class MenuPanel extends Component {
    render() {
        return (
            <div className="menu-panel-section">
                <AccountPanel/>
                <div className="side-menu-container z-depth-1">
                    <div className="side-menu">

                        <h3>sidemenu</h3>

                    </div>
                </div>
            </div>
        );
    }
}