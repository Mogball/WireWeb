import React, {Component} from 'react';
import './css/PanelAssembly.css';
import './css/materialize.css';

import MenuPanel from './MenuPanel';
import HomePanel from './HomePanel';
import AccountPanel from './AccountPanel';
import AccountActionPanel from './AccountActionPanel';

export default class PanelAssembly extends Component {
    render() {
        return (
            <div className="panel-assembly-section">
                <div className="account-panel-section">
                    <AccountPanel/>
                    <AccountActionPanel/>
                </div>
                <div className="side-panel-section">
                    <MenuPanel/>
                </div>
                <div className="mid-panel-section">
                    <HomePanel/>
                </div>
            </div>
        );
    }
}