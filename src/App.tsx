import React from 'react';
import {Counter} from './features/counter/Counter';
import './App.css';
import Main from "./main/Main";
import {Route} from "react-router-dom";
import NewsPage from "./main/components/NewsPage";


function App() {
    return (
        <div className="main-page">
            <header className="App-header">
                <Route exact path="/" component={Main}/>
                <Route exact path="/news/:id" component={NewsPage}/>
            </header>
        </div>
    );
}

export default App;
