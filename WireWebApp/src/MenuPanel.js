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
            // STUB dataAdd
            walletItems: props.walletItems
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
        <div className="home-panel-section z-depth-1">
            <div className="home-items-panel">
                <div className="history-list-toplevel">
                    <div className="z-depth-1 history-panel-title center indigo lighten-1">
                        <h5>{prop.cfg.menuPanel.sideMenuTitle}</h5>
                    </div>
                    <WalletList items={props.walletItems}/>
                </div>
            </div>
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
            <ul className="wallet-list center">
                <li>
                    <a className="btn waves-effect waves-light add-button">
                        <span className="no-drag">Add</span>
                    </a>
                </li>
                {items}
            </ul>
        );
    }
}

export class WalletItem extends Component {
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