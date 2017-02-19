import React, {Component} from 'react';
import './css/materialize.css';
import './css/AccountActionPanel.css';
import prop from './config';

export default class AccountActionPanel extends Component {

    render() {
        const actionLabels = prop.cfg.actionPanel.actionLabels.map((label) => {
            return (
                <ActionButton label={label} key={label}/>
            );
        });
        return (
            <div className="action-panel-toplevel indigo z-depth-2">
                <div className="container">
                    <div className="super-block">
                        <div className="block-1"/>
                        <div className="action-panel-block center">
                            <ul>
                                {actionLabels}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const ActionButton = function (props) {
    return (
        <li>
            <div className="waves-effect button-container">
                <a className="action-button">
                    <span>{props.label}</span>
                </a>
            </div>
        </li>
    );
};

class SRPopup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.title} className="popup-type-1">
                <div style={{display: "flex", height: "100%", width: "100%"}}>
                    <div style={{width: "15%"}} onClick={this.exit}/>
                    <div style={{height: "100%", width: "100%"}}>
                        <div style={{height: "5%"}} onClick={this.exit}/>
                        <div className="popup-window z-depth-2 center">
                            <div className="popup-title-block indigo z-depth-1">
                                <h1>{this.props.title}</h1>
                            </div>
                            <div>
                                <div className="amount-input-container">
                                    <input placeholder="Amount" ref="popupInputField"/>
                                </div>
                            </div>
                            <div className="row popup-buttons">
                                <div
                                    onClick={this.exit}
                                    className="btn-large waves-effect waves-light">
                                    <span>Cancel</span>
                                </div>
                                <div className="btn-large waves-effect waves-light">
                                    <span>{this.props.title}</span>
                                </div>
                            </div>
                        </div>
                        <div className="popup-bottom-stopped" onClick={this.exit}/>
                    </div>
                    <div style={{width: "15%"}} onClick={this.exit}/>
                </div>
            </div>
        );
    }
}