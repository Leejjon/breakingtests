import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div>
            <h1 id="pageHeader">About page</h1>
            <p>This is the about page</p>
        </div>
    );
};

const Home: React.FC = () => {
    return (
        <div>
            <h1 id="pageHeader">Home page</h1>
            <p>This is the home page</p>
        </div>
    );
};

const News: React.FC = () => {
    return (
        <div>
            <h1 id="pageHeader">News page</h1>
            <p>This is the news page</p>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Link id="linkToHome" to="/">Home</Link><br/>
                <Link id="linkToNews" to="/news">News</Link><br/>
                <Link id="linkToAbout" to="/about">About</Link>

                <Route exact path="/" component={Home}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/about" component={About}/>
            </BrowserRouter>
        </div>
    );
};


export default App;
