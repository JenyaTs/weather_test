import React from 'react';
import { Weather } from './features/weather/Weather';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Weather forecast</h1>
            <Weather />
        </div>
    );
}

export default App;
