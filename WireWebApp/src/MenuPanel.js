import React, {Component} from 'react';
import './css/MenuPanel.css';
import './css/materialize.css';
import prop from './config.js';

import AccountPanel from './AccountPanel';

export default class MenuPanel extends Component {
    constructor(props) {
        super(props);

        // Initialize state
        this.state = {
            // STUB data
            walletItems: [
                "RBC Visa Infinity",
                "Bank of Americard",
                "TD Canada Trust",
                "UnionPay",
                "PayPal Mastercard Express"
            ]
        }
    }

    render() {
        return (
            <div className="menu-panel-section">
                <AccountPanel/>
                <div className="side-menu-container z-depth-1">
                    <div className="side-menu header">
                        <div className="wallet-container">
                            <h5 className="wallet-title">{prop.cfg.menuPanel.sideMenuTitle}</h5>
                        </div>
                        <div className="wallet-container">
                            <div className="wallet-container"/>
                            <div className="wallet-container">
                                <div className="wallet-add-button">
                                    <div className="wallet-container text">
                                        +
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <WalletList/>
                </div>
            </div>
        );
    }
}

class WalletList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wallet-list-toplevel">
                <ul>
                    <li><WalletItem/></li>
                    <li><WalletItem/></li>
                    <li><WalletItem/></li>
                </ul>
            </div>
        );
    }
}

class WalletItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wallet-item-toplevel">
                <div className="item-name">
                    <p>RBC Visa Infinity express</p>
                </div>
                <div className="item-balance">
                    <p>$1,203,201</p>
                </div>
            </div>
        );
    }
}