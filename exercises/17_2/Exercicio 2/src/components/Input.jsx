import React from 'react';
import { connect } from 'react-redux'
import { action } from '../actions/action'

class Input extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="input1">Valor 1:<input onChange={(e) => this.props.changeValue(e.target.value, 'one')} id="input1" value={this.props.value.one.value} /></label>
        <label htmlFor="input2">Valor 2:<input onChange={(e) => this.props.changeValue(e.target.value, 'two')} id="input2" value={this.props.value.two.value} /></label>
        <label htmlFor="input3">Valor 3:<input onChange={(e) => this.props.changeValue(e.target.value, 'three')} id="input3" value={this.props.value.three.value} /></label>
        <p>Total:{this.props.value.sum.value}</p>
        {console.log(this.props)}
      </div>
    )
  }
}
const mapStateToProps = state => (
  {
    value: state,
  }
)

const mapDispatchToProps = dispatch => ({
  changeValue: (value, input) => { dispatch(action(value, input)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);