import React, {Component} from 'react';
import Header from './Header';
import PanelAssembly from './PanelAssembly';
import './css/Dashboard.css';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        // Initialize state
        this.state = {
            activeScreen: "Home"
        };

        // Bind functions
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="dashboard">
                <Header activeScreen={this.state.activeScreen}/>
                <PanelAssembly/>
            </div>
        );
    }
}
