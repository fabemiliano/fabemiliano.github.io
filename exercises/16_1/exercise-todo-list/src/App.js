import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      status: true,
      checked: false,
      checkedList:[],
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  change(event) {
    this.setState((state) => ({
      status: {...state.status,[event]: false},
      checked: !state.checked,
      checkedList: [...state.checkedList, event]
    }))
  }

  click(event) {
    this.setState(() => ({
      status: true,     
    }))
  }
  render() {
    const { listTodo } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        {listTodo &&
          listTodo.map((todo, index) => (
            <div key={index + 1}>
              <label htmlFor={todo}><input type="checkbox" key={index + 1} id={todo} value={todo} checked={this.state.status[todo]} onChange={(event) => this.change(event.target.value)} />{todo}</label>
            </div>
          ))
        }
        <button type='button' data-testid="id-remove" value="Remover" disabled={this.state.status} onClick={() => this.click()}>Remover</button>
      </div>
    );
  }
}
export default App;
