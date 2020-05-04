import React from 'react';

class TypeButton extends React.Component {
  render() {
    return (
    <button onClick={this.props.click}>{this.props.type}</button>
    )
  }
}

export default TypeButton;
