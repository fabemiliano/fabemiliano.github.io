import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.click}>Next Pokemon</button>
    )
  }
}

export default Button;
