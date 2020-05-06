import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css'

class DropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      option: 'a',
      hide: true,
      class: 'dropdown-hide'
    }
  }

  hide() {
    if (this.state.hide === true) {
      this.setState({
        class: 'dropdown-hide'
      })} else {
        this.setState({
          class: 'dropdown',
        })
      }
    this.setState((state) => ({
      hide: !state.hide,
    }))
  }

  changeContent(e) {
    this.setState({
      option: e.target.innerHTML
    })
  }

  render() {

    return (
      <div>
        {this.props.children}
        <div className='clickbox' hide={this.state.hide} onClick={() => this.hide()}>{this.state.option}</div>
        <div className={this.state.class}>
          <div className='clickbox2' onClick={(e) => this.changeContent(e)}>A</div>
          <div className='clickbox2' onClick={(e) => this.changeContent(e)}>B</div>
          <div className='clickbox2' onClick={(e) => this.changeContent(e)}>C</div>
          <div className='clickbox2' onClick={(e) => this.changeContent(e)}>D</div>
        </div>
        <div>Teste</div>
      </div>
    )
  }
}

DropDown.propTypes = {
  hide: PropTypes.bool,
}

export default DropDown;


