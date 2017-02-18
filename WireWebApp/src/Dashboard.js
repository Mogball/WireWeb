import React, {Component} from 'react';
import Header from './Header';
import PanelAssembly from './PanelAssembly';
import './css/Dashboard.css';
import update from 'immutability-helper';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        // Initialize state
        this.state = {
            activeScreen: "Home",
            shows: {}
        };
        this.popups = {};

        // Bind functions
        this.showPopup = this.showPopup.bind(this);
        this.hidePopup = this.hidePopup.bind(this);
        this.addPopup = this.addPopup.bind(this);
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    showPopup(name) {
        this.setState({
            shows: update(this.state.shows, {[name]: {$set: true}})
        });
    }

    hidePopup(name) {
        this.setState({
            shows: update(this.state.shows, {[name]: {$set: false}})
        });
    }

    addPopup(name, popup) {
        this.popups[name] = popup;
        this.setState({
            shows: update(this.state.shows, {[name]: {$set: false}})
        });
    }


    render() {
        const popups = [];
        var active = 0;
        for (var name in this.popups) {
            if (this.state.shows[name]) {
                active++;
            }
            if (this.popups[name]) {
                popups.push(this.popups[name]);
            }
        }
        const popupManager = (
            <PopupManager popups={popups} active={active !== 0}/>
        );
        return (
            <div className="dashboard">
                {popupManager}
                <Header activeScreen={this.state.activeScreen}/>
                <PanelAssembly popupManager={this}/>
            </div>
        );
    }
}

class PopupManager extends Component {
    render() {
        return (
            <div className={this.props.active ? "popup show" : "popup"}>
                {this.props.popups}
            </div>
        );
    }
}