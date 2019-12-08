import React from 'react';
import axios from 'axios';

import './App.css';
import PlayersList from './Components/PlayersList';
import Header from './Components/Header';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            playerList: []
        };
    }

    componentDidMount () {
        axios.get('http://localhost:5000/api/players')
            .then(re => {
                this.setState({playerList: re.data});
            });
    }

    render () {
        return (
            <div className="App">
                <Header/>
                <PlayersList players={this.state.playerList}/>
            </div>
        );
    }
}


export default App;
