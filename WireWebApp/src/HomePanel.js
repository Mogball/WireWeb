import React, {Component} from 'react';

import './css/HomePanel.css';
import './css/materialize.css';
import func from './helper';
import prop from "./config";

export default class HomePanel extends Component {
    constructor(props) {
        super(props);

        // Initialize state
        this.state = {
            // STUB data
            transactionHistory: [
                {
                    change: -765, timestamp: 61658567754356, uid: 846542106359,
                    username: "Tim Hortons", description: "Retail payment"
                },
                {
                    change: -34, timestamp: 61657934532554, uid: 986754213424,
                    username: "Eugene Wang", description: "Direct transfer"
                },
                {
                    change: -7524, timestamp: 61656454235334, uid: 456453446425,
                    username: "Amazon", description: "Purchase of 3 items"
                },
                {
                    change: -3425, timestamp: 61359973947937, uid: 345553444321,
                    username: "Steam", description: "Skyrim Legendary Edition"
                },
                {
                    change: 3553211, timestamp: 61345332441324, uid: 243213532453,
                    username: "OLB Crazy 75", description: "Lottery winnings"
                },
                {
                    change: 600000, timestamp: 61345235443643, uid: 435652432411,
                    username: "Forerunner Matthias", description: "Requested expenses"
                },
                {
                    change: 3235, timestamp: 61344156143742, uid: 642342523451,
                    username: "Forerunner Elinor", description: "Compensation for dinner"
                },
                {
                    change: -682745, timestamp: 61343635546543, uid: 363454624512,
                    username: "Origin PCs", description: "Thank you for your purchase!"
                },
                {
                    change: -1253, timestamp: 61342456134666, uid: 435146334674,
                    username: "McDonald's", description: "Retail purchase"
                },
                {
                    change: -43251, timestamp: 61341543246532, uid: 673856253525,
                    username: "Nintendo", description: "Nintendo Switch"
                },
            ]

        }
    }

    render() {
        return (
            <div className="home-panel-section z-depth-1">
                <div className="home-items-panel">
                    <HistoryPanel items={this.state.transactionHistory}/>
                </div>
            </div>
        );
    }
}

class HistoryPanel extends Component {
    render() {
        const items = this.props.items ?
            this.props.items.map((item) => {
                return (
                    <li key={item.timestamp}><HistoryItem item={item}/></li>
                );
            }) : null;
        return (
            <div className="history-list-toplevel">
                <div className="z-depth-1 history-panel-title center teal lighten-1">
                    <h5>{prop.cfg.homePanel.transactionHistoryLabel}</h5>
                </div>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

class HistoryItem extends Component {
    render() {
        return (
            <div className="history-toplevel-background">
                <div className="history-toplevel waves-effect">
                    <p className="history-date">
                        {func.formatDate(new Date(this.props.item.timestamp), true)}
                    </p>
                    <div className="history-item-block">
                        <div className="history-item-desc-block">
                            <p className="username">
                                {this.props.item.username}
                            </p>
                            <p className="description">
                                {this.props.item.description}
                            </p>
                        </div>
                        <p className="history-change">
                            {func.formatMoney(this.props.item.change, true)}
                        </p>
                    </div>
                </div>
            </div>
        );
    };
}