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
            <WalletListPanel
                popupMan={this.props.popupManager}
                walletItems={this.state.walletItems}/>
        );
    }
}

class WalletListPanel extends Component {
    render() {
        return (
            <div className="home-panel-section z-depth-1">
                <div className="home-items-panel">
                    <div className="history-list-toplevel">
                        <div className="z-depth-1 history-panel-title center indigo lighten-1">
                            <h5>{prop.cfg.menuPanel.sideMenuTitle}</h5>
                        </div>
                        <WalletList
                            popupMan={this.props.popupMan}
                            items={this.props.walletItems}/>
                    </div>
                </div>
            </div>
        );
    }
}
;

class WalletList extends Component {
    constructor(props) {
        super(props);
        this.state = {clicked: {name: "null"}};
        this.clickedItem = this.clickedItem.bind(this);
        this.hideRemove = this.hideRemove.bind(this);
        this.getClicked = this.getClicked.bind(this);
    }

    getClicked() {
        return this.state.clicked;
    }

    hideRemove() {
        this.props.popupMan.hidePopup("Remove");
        document.getElementById("Remove").className = "popup-type-1";
    }

    componentDidMount() {
        this.props.popupMan.addPopup("Remove",
            <RemovePopup key="Remove" title="Remove" hideDeposit={this.hideRemove}
                         getClicked={this.getClicked}/>
        );
    }

    clickedItem(item) {
        this.setState({clicked: item});
        this.props.popupMan.addPopup("Remove",
            <RemovePopup key="Remove" title="Remove" hideDeposit={this.hideRemove}
                         getClicked={item}/>
        );
        this.props.popupMan.showPopup("Remove");
        document.getElementById("Remove").className = "popup-type-1 show";
    }

    render() {
        const items = this.props.items ?
            this.props.items.map((item) => {
                return (
                    <li key={item.name}>
                        <WalletItem
                            clickedItem={this.clickedItem}
                            item={item}/>
                    </li>
                );
            }) : null;
        return (
            <ul className="wallet-list center">
                <li>
                    <a className="button btn waves-effect waves-light add-button">
                        <span className="no-drag">Add</span>
                    </a>
                </li>
                {items}
            </ul>
        );
    }
}

class WalletItem extends Component {
    constructor(props) {
        super(props);
        this.clicked = this.clicked.bind(this);
    }

    clicked() {
        if (this.props.clickedItem) {
            this.props.clickedItem(this.props.item);
        }
    }

    render() {
        const name = this.props.item.name ? this.props.item.name : "";
        const balance = this.props.item.balance ? func.formatMoney(this.props.item.balance) : "";
        return (
            <div onClick={this.clicked}
                 className="wallet-item-toplevel">
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

class RemovePopup extends Component {
    constructor(props) {
        super(props);
        this.exit = this.exit.bind(this);
        this.getItem = this.getItem.bind(this);
    }

    exit() {
        this.props.hideDeposit();
    }

    getItem() {
        return this.props.getClicked;
    }

    render() {
        return (
            <div id={this.props.title} className="popup-type-1">
                <div style={{display: "flex", height: "100%", width: "100%"}}>
                    <div style={{flex: 1}} onClick={this.exit}/>
                    <div style={{
                        height: "100%", width: "100%", display: "flex",
                        flexDirection: 'column', maxWidth: 800, margin: 'auto'
                    }}>
                        <div className="BT-padding" onClick={this.exit}/>
                        <div className="popup-window z-depth-2 center">
                            <div className="popup-title-block teal lighten-1 z-depth-1">
                                <h1>{this.props.title}</h1>
                            </div>
                            <div className="remove-popup-item">
                                <div className="remove-popup-item-block">
                                    <WalletItem item={this.getItem()}/>
                                </div>
                            </div>
                            <div className="row popup-buttons">
                                <div
                                    onClick={this.exit}
                                    className="btn-large waves-effect waves-light purple-btn">
                                    <span>Cancel</span>
                                </div>
                                <div className="btn-large waves-effect waves-light purple-btn">
                                    <span>{this.props.title}</span>
                                </div>
                            </div>
                        </div>
                        <div className="BT-padding" onClick={this.exit}/>
                    </div>
                    <div style={{flex: 1}} onClick={this.exit}/>
                </div>
            </div>
        );
    }
}