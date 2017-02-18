import React, {Component} from 'react';
import './css/MenuPanel.css';
import './css/materialize.css';
import prop from './config.js';
import func from './helper';
import './css/HomePanel.css';

export default class MenuPanel extends Component {
    constructor(props) {
        super(props);

        // Initialize state
        this.state = {
            // STUB data
            walletItems: [
                {name: "The swag bank of swagland, xd xd", balance: 999999849599},
                {name: "RBC Visa Infinity"},
                {name: "Bank of Americard"},
                {name: "RBC Express Checking", balance: -231423},
                {name: "TD Canada Trust", balance: 232312314},
                {name: "UnionPay", balance: 5245351},
                {name: "PayPal Mastercard Express", balance: 877573},
                {name: "Swag card 360 xd Bonus edition ;^)"}
            ]
        }
    }

    render() {
        return (
            <WalletListPanel walletItems={this.state.walletItems}/>
        );
    }
}

const WalletListPanel = function (props) {
    return (
        <div className="side-menu-container z-depth-1">
            <div className="side-menu header">
                <div className="wallet-container">
                    <h5 className="wallet-title">{prop.cfg.menuPanel.sideMenuTitle}</h5>
                </div>
            </div>
            <WalletList items={props.walletItems}/>
        </div>
    );
};

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
        const balance = this.props.item.balance ? func.formatMoney(this.props.item.balance) : "";
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