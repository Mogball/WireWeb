import React, {Component} from 'react';
import './css/PanelAssembly.css';
import './css/materialize.css';

import MenuPanel from './MenuPanel';
import HomePanel from './HomePanel';
import AccountPanel from './AccountPanel';
import AccountActionPanel from './AccountActionPanel';

export default class PanelAssembly extends Component {
    static get defaultProps() {
        return {
            accountPhoto: require('./res/stubProfilePic.jpg'),
            accountCompletion: 55,
            walletItems: [
                {name: "The swag bank of swagland, xd xd", balance: 999999849599},
                {name: "RBC Visa Infinity"},
                {name: "Bank of Americard"},
                {name: "RBC Express Checking", balance: -231423},
                {name: "TD Canada Trust", balance: 232312314},
                {name: "UnionPay", balance: 5245351},
                {name: "PayPal Mastercard Express", balance: 877573},
                {name: "Swag card 360 xd Bonus edition ;^)"},
                {name: "Mega swagalicious card"}
            ],
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
            <div className="panel-assembly-section">
                <div className="account-panel-section">
                    <AccountPanel
                        popupManager={this.props.popupManager}
                        accountCompletion={this.props.accountCompletion}
                        accountPhoto={this.props.accountPhoto}
                        walletItems={this.props.walletItems}/>
                    <AccountActionPanel/>
                </div>
                <div className="container main-section-block">
                    <div className="side-panel-section">
                        <MenuPanel
                            walletItems={this.props.walletItems}/>
                    </div>
                    <div className="mid-panel-section">
                        <HomePanel transactionHistory={this.props.transactionHistory}/>
                    </div>
                </div>
            </div>
        );
    }
}