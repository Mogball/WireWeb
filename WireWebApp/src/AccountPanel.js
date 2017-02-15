import React, {Component} from 'react';
import './css/AccountPanel.css';
import './css/materialize.css';

export default class AccountPanel extends Component {
    render() {
        return (
            <div className="account-panel-section z-depth-2">
                <AccountDisplay/>
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
        ctx.fillStyle = '#eeff41';
        ctx.beginPath();
        ctx.moveTo(hw, hh);
        ctx.arc(hw, hh, 2 * hh, 0, Math.PI * this.state.accountCompletion / 50, false);
        ctx.fill();
    }

    render() {
        return (
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
        );
    }
}