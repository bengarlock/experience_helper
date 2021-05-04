import React from 'react'
import { segments } from "../Tag";
import Objects from "../Cards/Object";

class Segments extends React.Component {

    renderSegments = () => {
        return segments.map(object => <Objects key={object.id} object={object}/>)
    }

    render() {
        return(
            <div className="App">
                <h1>Segments</h1>
                {this.renderSegments()}
            </div>
        )
    }
}

export default Segments