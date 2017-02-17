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