import React, {FC} from 'react';
import './App.css';

interface IAppProps{
    name?: string
}

const App:FC<IAppProps> = (props)  => {
    return (
        <div className="App">
            <h1>Hello React!</h1>
            <h2>{props.name}</h2>
            <p>Nice TDD</p>
        </div>
    );
}

export default App;
