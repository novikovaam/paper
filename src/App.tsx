import React from 'react';
import './App.css';

import {Route} from "react-router-dom";
import NewsPage from "./main/components/NewsPage";
import NewsList from "./main/components/NewsList";


function App() {
    return (
        <div className="main-page">
            <header className="App-header">
                <Route exact path="/" component={NewsList}/>
                <Route exact path="/news/:id" component={NewsPage}/>
            </header>
        </div>
    );
}

export default App;
