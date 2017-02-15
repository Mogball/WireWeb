import React, {Component} from 'react';
import Header from './Header';

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
            <Header activeScreen={this.state.activeScreen}/>
        );
    }
}