import React, {Component} from 'react';
import './css/AccountPanel.css';
import './css/materialize.css';
import func from './helper';
import './effects';

export default class AccountPanel extends Component {
    render() {
        return (
            <div className="account-panel-section-block indigo">
                <div className="container">
                    <div className="account-panel-container">
                        <ul>
                            <AccountDisplay
                                accountCompletion={this.props.accountCompletion}
                                accountPhoto={this.props.accountPhoto}/>
                            <AccountInfo
                                popupManager={this.props.popupManager}/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

class AccountDisplay extends Component {
    constructor(props) {
        super(props);

        // Initialize state
        this.state = {
            // STUB data
            accountCompletion: props.accountCompletion ? props.accountCompletion : 0,
            accountPhoto: props.accountPhoto ? props.accountPhoto : null
        };

        // Bind functions
    }

    componentDidMount() {
        const canvas = this.refs.accountProgress;
        const ctx = canvas.getContext('2d');
        const hw = canvas.width / 2;
        const hh = canvas.height / 2;
        ctx.fillStyle = '#b2ff59';
        ctx.beginPath();
        ctx.moveTo(hw, hh);
        ctx.arc(hw, hh, 2 * hh, 0, Math.PI * this.state.accountCompletion / 50, false);
        ctx.fill();
    }

    render() {
        return (
            <li>
                <div className="profile-picture-container">
                    <div className="block">
                        <div className="profile-picture-assembly">
                            <canvas ref="accountProgress"/>
                            <div className="sub-block-1">
                                <div className="sub-block-2">
                                    <div className="profile-picture waves-effect">
                                        <img alt="profilePic"
                                             src={this.state.accountPhoto}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

class AccountInfo extends Component {
    constructor(props) {
        super(props);

        // Initialize state
        this.state = {
            // STUB data
            firstName: 'Emeritus',
            lastName: 'Pachementyke',
            balance: 3354743562,
            balancePoints: 23145252,
        };
        this.hideDeposit = this.hideDeposit.bind(this);
        this.hideWithdraw = this.hideWithdraw.bind(this);
        this.clickedDeposit = this.clickedDeposit.bind(this);
        this.clickedWithdraw = this.clickedWithdraw.bind(this);
    }

    hideDeposit() {
        this.props.popupManager.hidePopup("Deposit");
        document.getElementById("Deposit").className = "popup-type-1";
    }

    hideWithdraw() {
        this.props.popupManager.hidePopup("Withdraw");
        document.getElementById("Withdraw").className = 'popup-type-1';
    }

    clickedDeposit() {
        this.props.popupManager.showPopup("Deposit");
        document.getElementById("Deposit").className = "popup-type-1 show";
    }

    clickedWithdraw() {
        this.props.popupManager.showPopup("Withdraw");
        document.getElementById("Withdraw").className = "popup-type-1 show";
    }

    componentDidMount() {
        this.props.popupManager.addPopup("Deposit",
            <DepositPopup key="Deposit" hideDeposit={this.hideDeposit}/>
        );
        this.props.popupManager.addPopup("Withdraw",
            <WithdrawPopup key="Withdraw" hideDeposit={this.hideWithdraw}/>
        );
    }

    render() {
        const name = this.state.firstName + " " + this.state.lastName;
        return (
            <li className="account-info-toplevel">
                <h4>{name}</h4>
                <div className="account-info-container">
                    <div className="account-info">
                        <div className="label-block spread-vertical">
                            <InfoItem>Balance</InfoItem>
                            <InfoItem>Points</InfoItem>
                        </div>
                        <div className="value-block spread-vertical">
                            <InfoItem>{func.formatMoney(this.state.balance)}</InfoItem>
                            <InfoItem>{func.formatComma(this.state.balancePoints)}</InfoItem>
                        </div>
                    </div>
                    <div className="account-actions">
                        <div className="button-assembly">
                            <div
                                onClick={this.clickedDeposit}
                                className="button btn waves-effect waves-light">
                                <span>Deposit</span>
                            </div>
                            <div
                                onClick={this.clickedWithdraw}
                                className="button btn waves-effect waves-light">
                                <span>Withdraw</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

const InfoItem = function (props) {
    return (
        <div className="isub-block-1">
            <div className="isub-block-2">
                <span><h5>{props.children}</h5></span>
            </div>
        </div>
    );
};

class DepositPopup extends Component {
    render() {
        return (
            <div id="Deposit" className="popup-type-1">
                <div style={{display: "flex", height: "100%", width: "100%"}}>
                    <div style={{width: "15%"}} onClick={this.props.hideDeposit}/>
                    <div style={{height: "100%", width: "100%"}}>
                        <div style={{height: "15%"}} onClick={this.props.hideDeposit}/>
                        <div className="popup-window z-depth-2 center">
                            <div className="indigo z-depth-1">
                                <h1>Deposit</h1>
                            </div>
                        </div>
                        <div style={{height: "15%"}} onClick={this.props.hideDeposit}/>
                    </div>
                    <div style={{width: "15%"}} onClick={this.props.hideDeposit}/>
                </div>
            </div>
        );
    }
}


class WithdrawPopup extends Component {
    render() {
        return (
            <div id="Withdraw" className="popup-type-1">
                <div style={{display: "flex", height: "100%", width: "100%"}}>
                    <div style={{width: "15%"}} onClick={this.props.hideDeposit}/>
                    <div style={{height: "100%", width: "100%"}}>
                        <div style={{height: "15%"}} onClick={this.props.hideDeposit}/>
                        <div className="popup-window z-depth-2 center">
                            <div className="indigo z-depth-1">
                                <h1>Withdraw</h1>
                            </div>
                        </div>
                        <div style={{height: "15%"}} onClick={this.props.hideDeposit}/>
                    </div>
                    <div style={{width: "15%"}} onClick={this.props.hideDeposit}/>
                </div>
            </div>
        );
    }
}