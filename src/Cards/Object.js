import React from 'react'


class Objects extends React.Component {

    render() {
        return (
            <div className="object-wrapper" draggable="true">
                <div>{this.props.object.name}</div>
            </div>
        );
    }
}

export default Objects;
