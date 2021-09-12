import React, { Component } from 'react'

export default class Position extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat:0,
            lng:0,
            isLoading:true
        }
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    isLoading: false
                });
            }, (error) => {
                alert(error);
            })
        }
        else {
            alert('Your browser does not support geolocation')
        }
    }
    
    render() {
        const {lat, lng, isLoading} = this.state;
        if  (isLoading) {
            return <p>Loading...</p>
        } else {
            return (
                <div>
                    Position: {lat.toFixed(3)}, {lng.toFixed(3)}
                </div>
            )
        }
   
    }
}
