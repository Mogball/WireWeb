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
                {name: "RBC Visa Infinity"},
                {name: "Bank of Americard"},
                {name: "TD Canada Trust", balance: 232312314},
                {name: "UnionPay", balance: 5245351},
                {name: "PayPal Mastercard Express", balance: 877573},
                {name: "Swag card 360 xd Bonus edition ;^)"}
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
                                    <div className="wallet-container text">+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <WalletList items={this.state.walletItems}/>
                </div>
            </div>
        );
    }
}

class WalletList extends Component {
    render() {
        const items = this.props.items ?
            this.props.items.map((item) => {
                return (
                    <li key={item.name}><WalletItem item={item}/></li>
                );
            }) : null;
        return (
            <div className="wallet-list-toplevel">
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

class WalletItem extends Component {
    render() {
        const name = this.props.item.name ? this.props.item.name : "";
        const balance = this.props.item.balance ? formatMoney(this.props.item.balance) : "";
        return (
            <div className="wallet-item-toplevel">
                <div className="item-name">
                    <p>{name}</p>
                </div>
                <div className="item-balance">
                    <p>{balance}</p>
                </div>
            </div>
        );
    }
}

var formatMoney = function (n, showPlus, hideDollar) {
    hideDollar = !!hideDollar;
    showPlus = !!showPlus;
    n /= 100;
    var s = n < 0 ? '—' : (showPlus ? '+' : '') + '';
    s += hideDollar ? '' : '$';
    var i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(2)));
    var j;
    j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + ',' : '')
        + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + ',')
        + (2 ? '.' + Math.abs(n - i).toFixed(2).slice(2) : '');
};