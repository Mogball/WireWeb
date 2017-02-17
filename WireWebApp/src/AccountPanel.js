import React, {Component} from 'react';
import './css/AccountPanel.css';
import './css/materialize.css';
import func from './helper';

export default class AccountPanel extends Component {
    render() {
        return (
            <div className="account-panel-section-block z-depth-2 indigo">
                <div className="container">
                    <div className="account-panel-container">
                        <ul>
                            <AccountDisplay/>
                            <AccountInfo/>
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
            accountCompletion: 55,
            accountPhoto: require('./res/stubProfilePic.jpg')
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
                                    <img className="profile-picture" alt="profilePic"
                                         src={this.state.accountPhoto}/>
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
        }
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
                            <div className="button deposit z-depth-1 btn">Deposit</div>
                            <div className="button withdraw z-depth-1 btn">Withdraw</div>
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
}