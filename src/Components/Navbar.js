import React from 'react'
import "../Stylesheets/Navbar.css"
import { Link } from "react-router-dom";

class Navbar extends React.Component {

    state = {
        button: ''
    }

    setButton = (e) => {
        if (e.target.id === "segments") {
            this.setState({
                button: "segments"
            })
        } else if (e.target.id === "components") {
            this.setState({
                button: "components"
            })
        }
    }

    render() {
        return(
            <div>
                <ul className="nav-bar">
                    <Link to={{pathname: "/segments"}}>
                        <li className={this.state.button === "segments" ? "nav-bar-button-selected" : "nav-bar-button"}
                            id="segments"
                            onClick={this.setButton}
                        >
                            Segments
                        </li>
                    </Link>

                    <Link to={{pathname: "/components"}}>
                        <li className={this.state.button === "components" ? "nav-bar-button-selected" : "nav-bar-button"}
                            id="components"
                            onClick={this.setButton}
                        >
                            Components
                        </li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Navbar