import React, {Component} from 'react';
import StoreHeader from './StoreHeader';
import StoreActionBar from './StoreActionBar';
import './css/StorePanelAssembly.css';

export default class StorePanelAssembly extends Component {
    static get defaultProps() {
        return {
            postings: [
                {
                    id: "123456789012",
                    user: {
                        firstName: "Janison",
                        lastName: "McArthur",
                        uid: "321523578412",
                        email: "j.mcarthur@gmail.com",
                        phone: "19056662341",
                        reputation: 93,
                        location: {
                            country: "Canada",
                            state: "Ontario",
                            city: "Keswick",
                            distance: 50
                        },
                        photo: require('./res/stubProfilePic.jpg'),
                        completion: 100
                    },
                    type: "singleItem",
                    title: "Rare Draemora Artifact",
                    description: "Found lying on the side of the road,"
                    + " turns pigs into flying sheep.",
                    thumbnail: require("./res/stubPostingPic.png"),

                    price: 35000
                },
                {
                    id: "453586375924",
                    user: {
                        firstName: "Forerunner",
                        lastName: "Lumerious",
                        uid: "647692953741",
                        email: "",
                        phone: "17673342314",
                        reputation: 75,
                        location: {
                            country: "Canada",
                            state: "Ontario",
                            city: "Newmarket",
                            distance: 2
                        },
                        photo: require('./res/stubProfilePic.jpg'),
                        completion: 50
                    },
                    type: "singleItem",
                    title: "Ouroboros energy orb",
                    description: "Place it near fires and a genie will appear to "
                    + "eat your children.",
                    thumbnail: require("./res/stubPostingPic.png"),

                    price: 600000
                },
                {
                    id: "674867462857",
                    user: {
                        firstName: "Ryan",
                        lastName: "Pelchat",
                        uid: "426385942535",
                        email: "ryan.pelchat@hotmail.com",
                        phone: "",
                        reputation: 45,
                        location: {
                            country: "Equinox",
                            state: "Harvestar Kingdom",
                            city: "Malakath",
                            distance: 67002123
                        },
                        photo: require('./res/stubProfilePic.jpg'),
                        completion: 70
                    },
                    type: "retailStore",
                    title: "Ryan Pelchat's Swag Store",
                    description: "Find the sickest swag you'll ever see at"
                    + " Ryan Pelchat's Swag Store.",
                    thumbnail: null,

                    hideUser: true,
                    location: {
                        country: "Equinox",
                        state: "Harvestar Kingdom",
                        city: "Malakath",
                        distance: 67000425
                    },
                    retail: [
                        {
                            name: "Swag1",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                            "elit. Aenean nisl nibh, rhoncus faucibus nunc at, pretium fringilla " +
                            "augue. Vestibulum nec pharetra diam, vitae elementum purus.",
                            price: 3500
                        },
                        {
                            name: "Swag2",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                            "elit. Aenean nisl nibh, rhoncus faucibus nunc at, pretium fringilla " +
                            "augue. Vestibulum nec pharetra diam, vitae elementum purus.",
                            price: 5000
                        },
                        {
                            name: "Swag3",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                            "elit. Aenean nisl nibh, rhoncus faucibus nunc at, pretium fringilla " +
                            "augue. Vestibulum nec pharetra diam, vitae elementum purus.",
                            price: 7000
                        },
                        {
                            name: "Swag4",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                            "elit. Aenean nisl nibh, rhoncus faucibus nunc at, pretium fringilla " +
                            "augue. Vestibulum nec pharetra diam, vitae elementum purus.",
                            price: 3000
                        }
                    ]
                },
                {
                    id: "423512056523",
                    user: {
                        firstName: "Forerunner",
                        lastName: "Adyen",
                        uid: "593432432903",
                        email: "forerunner.adyen@enclave.pro",
                        phone: "14253344521",
                        reputation: 10,
                        location: {
                            country: "Prothean Fleet",
                            state: "Starship Meldorne",
                            city: "Sector 1A-78",
                            distance: 44535253124
                        },
                        photo: require("./res/stubProfilePic.jpg"),
                        completion: 10
                    },
                    type: "auction",
                    title: "Some powerful item",
                    description: "Buy it because it's so stronk.",
                    thumbnail: require("./res/stubPostingPic.png"),

                    auction: {
                        minBid: 2000,
                        current: 4000
                    }
                },
                {
                    id: "073517047436",
                    user: {
                        firstName: "Forerunner",
                        lastName: "Adyen",
                        uid: "593432432903",
                        email: "forerunner.adyen@enclave.pro",
                        phone: "14253344521",
                        reputation: 10,
                        location: {
                            country: "Prothean Fleet",
                            state: "Starship Meldorne",
                            city: "Sector 1A-78",
                            distance: 44535253124
                        },
                        photo: require('./res/stubProfilePic.jpg'),
                        completion: 10
                    },
                    type: "auction",
                    title: "Another powerful item",
                    description: "Buy it because it's also stronk.",
                    thumbnail: require("./res/stubPostingPic.png"),

                    auction: {
                        current: 4000
                    }
                },
                {
                    id: "434643270123",
                    user: {
                        firstName: "Emeritus",
                        lastName: "Pachementyke",
                        uid: "111111111111",
                        email: "emeritus.pachementyke@terran.cdn",
                        phone: "11111111111",
                        reputation: 100,
                        location: {
                            country: "Terran Confederation",
                            state: "Hyperion",
                            city: "Prefecture 0",
                            distance: -1
                        },
                        photo: require('./res/stubProfilePic.jpg'),
                        completion: 55
                    },
                    type: "restaurant",
                    title: "McDonald's",
                    description: "The crispiest McNuggets you'll ever taste.",
                    thumbnail: null,

                    hideUser: true,
                    location: {
                        country: "Canada",
                        state: "Ontario",
                        city: "Aurora",
                        distance: 24
                    },
                    restaurant: [
                        {
                            name: "McNuggets",
                            description: "",
                            price: 1200
                        },
                        {
                            name: "Big Mac",
                            description: "Is a giant Big Mac still a Big Mac.",
                            price: 800
                        },
                        {
                            name: "McChicken",
                            description: "",
                            price: 600
                        },
                        {
                            name: "Zuckerburger",
                            description: "Made from real Marks",
                            price: 99999
                        }
                    ]
                }
            ]
        };
    }

    render() {
        const postings = this.props.postings.map((posting) => {
            return (<Posting key={posting.id} posting={posting}/>);
        });
        return (
            <div className="store-assembly">
                <StoreHeader
                    user={this.props.user}
                    location={this.props.location}/>
                <StoreActionBar/>
                <div className="store-toplevel">
                    <div className="container">
                        <div className="store-panel">
                            <div className="body">
                                <ul>
                                    {postings}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Posting extends Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false, canClick: true};
        this.clickedIn = this.clickedIn.bind(this);
        this.clickedOut = this.clickedOut.bind(this);
        this.stopClick = this.stopClick.bind(this);
        this.startClick = this.startClick.bind(this);
    }

    clickedIn() {
        if (this.state.canClick) {
            this.setState({clicked: true});
        }
    }

    clickedOut() {
        if (this.state.canClick) {
            this.setState({clicked: false});
        }
    }

    stopClick() {
        this.setState({canClick: false});
    }

    startClick() {
        this.setState({canClick: true});
    }

    render() {
        const posting = this.props.posting;
        const user = posting.user;
        const sideDisplay = posting.hideUser ? (
            <PostingRepDisplay user={user}/>
        ) : (
            <PostingAccountDisplay user={user} posting={this}/>
        );
        const thumbnail = !posting.thumbnail ? null : (
            <div className="photo-container">
                <img src={posting.thumbnail} alt="thumbnail"/>
            </div>
        );
        return (
            <li className={"posting-toplevel "
            + (this.state.clicked ? "active " : "") + "z-depth-1 waves-effect"}
                onMouseDown={this.clickedIn} onMouseUp={this.clickedOut}
                onMouseLeave={this.clickedOut}>
                <div className="posting-info-container">
                    <ul>
                        <li>{thumbnail}</li>
                        <li>
                            <div className="posting-text-info">
                                <h5>{posting.title}</h5>
                                <p>{posting.description}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                {sideDisplay}
            </li>
        );
    }
}

const PostingAccountDisplay = function (props) {
    const user = props.user;
    return (
        <div className="posting-account-display-container">
            <div className="posting-account-display-block">
                <div className="user-information">
                    <AccountDisplay accountCompletion={user.completion}
                                    accountPhoto={user.photo}
                                    posting={props.posting}/>
                    <h6>{"{0} {1}".format(user.firstName, user.lastName)}</h6>
                    <div className="reputation-bar z-depth-1">
                        <div className="reputation-bar-filled"
                             style={{width: user.reputation + "%"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PostingRepDisplay = function (props) {
    return (
        <div className="reputation-bar vertical z-depth-1">
            <div className="reputation-bar-filled"
                 style={{height: props.user.reputation + "%"}}/>
        </div>
    )
};


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
            <div className="profile-picture-container small"
                 onMouseEnter={this.props.posting.stopClick}
                 onMouseLeave={this.props.posting.startClick}>
                <div className="block">
                    <div className="profile-picture-assembly">
                        <canvas ref="accountProgress"/>
                        <div className="sub-block-1">
                            <div className="sub-block-2 small">
                                <div className="profile-picture small waves-effect">
                                    <img alt="profilePic"
                                         src={this.state.accountPhoto}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
