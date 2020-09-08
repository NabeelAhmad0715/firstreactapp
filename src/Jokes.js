import React, { Component } from 'react';

class Joke extends Component {
  render() {
    return (
      <div>
        <h3 style={{ display: !this.props.question && 'none' }}>
          Question: {this.props.question}
        </h3>
        <h3 style={{ color: !this.props.question && '#888888' }}>
          Answer: {this.props.punchLine}
        </h3>
        <hr />
      </div>
    );
  }
}

export default Joke;
