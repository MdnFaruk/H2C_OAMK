import React, { Component } from 'react'

export default class Detail extends Component {
  

    handleClick = () => {
        this.props.show();
    }
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <img style={{width:300}} src={this.props.image} alt={"haha"}></img>
                <p>{this.props.description}</p>
                <button onClick={this.handleClick}>Back to News</button>
            </div>
        )
    }
}
