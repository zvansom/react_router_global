import React, { Component } from 'react';

export default class About extends Component {
  componentDidMount() {
    document.title = `About ${this.props.name}`;
  }

  render() {
    return (
      <div>
        <h1>About {this.props.name}!</h1>
        <p>Cumque et dolores sunt sit cumque adipisci nam culpa. Assumenda repellendus omnis error cum eaque. Velit omnis sunt unde. Esse laudantium dolor sed sequi tempora.</p>
      </div>
    );
  }
}
