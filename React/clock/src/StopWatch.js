import React, { Component } from 'react'
import Toggle from './Toggle';

export default class StopWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {seconds: 0};
    }

    componentDidMount() {
        this.start();
    }

    componentWillUnmount() {
        this.stop();
    }

    start = () => {
        this.timerId = setInterval(() => this.tick(), 1000);
        this.setState({seconds:0});
    }
    stop = () => {
        clearInterval(this.timerId);
    }

    tick () {
        this.setState(prevState => ({
            seconds: prevState.seconds +1}));
    }

    render() {
        return (
            <div>
                <Toggle start={this.start} stop={this.stop} />
                <p>{this.state.seconds}</p>
            </div>
        )
    }
}
