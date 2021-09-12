import React, { Component } from 'react'
import Detail from './Detail';

const URL = 'https://newsapi.org/v2';
const APIKEY = 'd4fd82b33f5a45988cbb0680fdc2b819';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: false,
            items: [],
            selectedItem: null,
        }
    }

    showDetails = param => e => {
        this.setState({
            selectedItem: param
        });
    }

    showNews = () => {
        this.setState({
            selectedItem:null
        });
    }

    componentDidMount() {
        const criteria = 'top-headlines?country=us&category=business';
        const address = URL + '/' + criteria + '&apikey=' + APIKEY;
        fetch(address)
        .then(res => res.json())
        .then (
            (result) =>{
            this.setState({
                error:null,
                items: result.articles,
                isLoaded: true
            })
        },
       (error) => {
            this.setState({
                error,
                isLoaded: true,
                items: []
            })
        }
        )
    }

    render() {
        const {error, items, isLoaded, selectedItem} = this.state;

        if (selectedItem === null) {   
            if (error) {
                return <p>{error.message}</p>;
            } else if (!isLoaded) {
                return <p>Loading...</p>;
            } else {
                return (
                    <div>
                        <h2>TOP headlines from US</h2>
                        {items.map(item =>(
                            <div key={item.title} onClick={this.showDetails(item)}>
                            <h3>{item.title}</h3>
                            <img style={{width:300}} src={item.urlToImage} alt={"haha"}></img>
                            <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                );
            }
        } 
    }
}
