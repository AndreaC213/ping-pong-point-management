/* Modules */
import React, { Component } from 'react';

/* Components */
import Navbar from './components/NavbarComponent';
import Scoreboard from './components/ScoreboardComponent';

class App extends Component {
    render() {
        return (
            <div className="aph flex__item flex__item--center tts__content no-select">
                <Navbar />
                <Scoreboard />
            </div>
        );
    }
}

export default App;
