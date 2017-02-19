import React, {Component} from 'react';
import Header from './Header';
import PanelAssembly from './PanelAssembly';
import StorePanelAssembly from './StorePanelAssembly';
import ManagePanelAssembly from './ManagePanelAssembly';
import update from 'immutability-helper';
import './css/Dashboard.css';

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
        this.navClick = this.navClick.bind(this);
        this.showPopup = this.showPopup.bind(this);
        this.hidePopup = this.hidePopup.bind(this);
        this.addPopup = this.addPopup.bind(this);
        this.removePopup = this.removePopup.bind(this);
    }

    navClick(screen) {
        this.setState({activeScreen: screen});
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

    removePopup(name) {
        this.popups[name] = null;
        this.setState({
            shows: update(this.state.shows, {[name]: {$set: null}})
        });
    }

    render() {
        const popups = [];
        var active = 0;
        for (var name in this.popups) {
            if (this.popups.hasOwnProperty(name)) {
                if (this.state.shows[name]) {
                    active++;
                }
                if (this.popups[name]) {
                    popups.push(this.popups[name]);
                }
            }
        }
        const popupManager = (
            <PopupManager popups={popups} active={active !== 0}/>
        );
        var activeScreen;
        if (this.state.activeScreen === "Home") {
            activeScreen = (
                <PanelAssembly popupManager={this}/>
            );
        } else if (this.state.activeScreen === "Store") {
            activeScreen = (
                <StorePanelAssembly popupManager={this}/>
            );
        } else if (this.state.activeScreen === "Manage") {
            activeScreen = (
                <ManagePanelAssembly popupManager={this}/>
            );
        } else {
            activeScreen = null;
        }
        return (
            <div className="dashboard">
                {popupManager}
                <Header navClick={this.navClick} activeScreen={this.state.activeScreen}/>
                <div className="header-placeholder"/>
                {activeScreen}
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