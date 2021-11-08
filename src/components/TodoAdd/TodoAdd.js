import React, { Component } from 'react';

// добавить действие
class TodoAdd extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state); //после ввода в текстериа -> Add-> {message: 'jkjkbjbkj'}
    this.props.onSubmit(this.state.message); //<TodoAdd onSubmit={this.addTodo} />
    this.setState({ message: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit">Add</button>
      </form>
    );
  }
}
export default TodoAdd;
