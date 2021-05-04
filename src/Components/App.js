import '../Stylesheets/App.css';
import React from 'react'
import Segments from "./Segments";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


class App extends React.Component {

    render() {
        return (
            <div>
                <Router basename={"/"}>
                    <Navbar />
                    <Route exact path="/"><Redirect to="/Segments" /></Route>
                    <Route path="/Segments" component={ Segments } />
                </Router>
            </div>

        );
    }
}

export default App;
