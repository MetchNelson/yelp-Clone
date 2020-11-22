import React from 'react';
import ReadctDOM from 'react-dom';


class Greeting extends React.Component {
    render() {
    return <h1>Hello there, {this.props.name}!</h1>
    }
}

ReadctDOM.render(<Greeting name="Jack" />, document.getElementById("main"));