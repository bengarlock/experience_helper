import React from 'react'
import { segments } from "../Tag";
import Objects from "../Cards/Object";

class Segments extends React.Component {

    state = {
        tagSegments: []
    }

    renderDownloadSegments = () => {
        return segments.map(object => <Objects key={object.id} object={object}/>)
    }

    renderTagSegments = () => {
        return this.state.tagSegments.map(object => <Objects key={object.id} object={object}/>)
    }

    onDragEnter = (e) => {
        document.getElementById("tag-config").style.backgroundColor = "blue"
        console.log(e.target)
    }

    render() {
        return (
            <div className="container-flow">
                <h1 className="title-header">Segments</h1>
                <div className="inner-wrapper">
                    <div className="column-wrapper">
                        <h3>Downloaded Config</h3>
                        {this.renderDownloadSegments()}
                    </div>
                    <div div className="column-wrapper" id="tag-config"
                         onDragEnter={this.onDragEnter}>
                        <h3>Tag Config</h3>
                        {this.renderTagSegments()}
                    </div>

                </div>
            </div>
        )
    }
}

export default Segments