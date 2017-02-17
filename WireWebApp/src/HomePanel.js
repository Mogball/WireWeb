import React, {Component} from 'react';

import './css/HomePanel.css';
import './css/materialize.css';
import func from './helper';

export default class HomePanel extends Component {
    constructor(props) {
        super(props);

        // Initialize state
        this.state = {
            // STUB data
            transactionHistory: [
                {change: -765, timestamp: 61658567754356, uid: 846542106359},
                {change: -34, timestamp: 61657934532554, uid: 986754213424},
                {change: -7524, timestamp: 61656454235334, uid: 456453446425},
                {change: -3425, timestamp: 61359973947937, uid: 345553444321},
                {change: 3553211, timestamp: 61345332441324, uid: 243213532453},
                {change: 600000, timestamp: 61345235443643, uid: 435652432411},
                {change: 3235, timestamp: 61344156143742, uid: 642342523451},
                {change: -682745, timestamp: 61343635546543, uid: 363454624512},
                {change: -1253, timestamp: 61342456134666, uid: 435146334674},
                {change: -43251, timestamp: 61341543246532, uid: 673856253525},
            ]

        }
    }

    render() {
        return (
            <div className="home-panel-section">
                <div className="home-info-panel">

                </div>
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
                <h5>Transaction history</h5>
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
            <div className="history-toplevel">
                <p className="history-date">
                    {func.formatDate(new Date(this.props.item.timestamp), true)}
                </p>
                <p className="history-change">
                    {func.formatMoney(this.props.item.change, true)}
                </p>
                <p className="history-uid">
                    {this.props.item.uid}
                </p>
            </div>
        );
    };
}