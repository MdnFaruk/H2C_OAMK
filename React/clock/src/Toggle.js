import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState =>({        // Here "state" argument ar jaigai j kono argument can be used
            isToggleOn: !prevState.isToggleOn   // then ai "state" argument change korta hba
        }));
        if (this.state.isToggleOn) {
            this.props.stop();
        } else {
            this.props.start();
        }
    }

    render() {
        const {isToggleOn} = this.state;    //destructuring
        return (
            <button onClick={this.handleClick}>
                {isToggleOn ? 'Off' : 'On'}
            </button>
        )
    }
}
