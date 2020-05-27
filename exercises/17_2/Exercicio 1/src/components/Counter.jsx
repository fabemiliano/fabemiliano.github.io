import React from 'react';
import {connect} from 'react-redux'
import {action} from '../actions/action'

class Counter extends React.Component{
  render() {
    return(
      <div>
        <div>Cliques:{this.props.counter}</div>
        <button onClick={() => this.props.click()}>Click Aqui</button>
      </div>
    )
  }
}
const mapStateToProps = state => (
  {counter: state }
)
const mapDispatchToProps = dispatch => (
  {click: () => {dispatch(action)}}
)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);