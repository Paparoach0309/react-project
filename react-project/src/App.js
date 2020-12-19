import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './styles/style.css';
import './styles/media.css';
import Nav from './Components/Nav/NavMenu';
import Home from './Components/Home';
import Teams from './Components/Teams';
import Stadiums from './Components/Stadiums';
import Slider from './Components/Sliders/Slider';
import Gallery from './Components/Gallery';
import Ticketing from './Components/Ticketing';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            statusData: false
        };
        this.getData();
    }

    getData = async function () {
        if (this.storage()) return;

        await fetch('https://myfakeapi.com/api/football/')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            this.setState({
                statusData: true
            });
            console.log(result);

            this.storage(result);
        });
    }

    storage(data) {
        data = data || '';
        if (data && data.football) {
            localStorage.setItem('data', JSON.stringify(data));

            return true;
        } else {
            const storageData = localStorage.getItem('data') || '';

            if(storageData.length > 0) return JSON.parse(storageData);
        }

        return false;
    }
    render () {
        return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Route path='/home' component={Home}/>
                <Nav/>
                <Slider/>
                <Route path='/teams' component={Teams}/>
                <Route path='/stadiums' component={Stadiums}/> 
                <Route path='/gallery' component={Gallery}/>
                <Route path='/ticketing' component={Ticketing}/>
            </div> 
        </BrowserRouter>
        )
    }
}

export default App;
