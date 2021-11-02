import React, { Component } from 'react';
const shortid = require('shortid');

class Form extends Component {
  state = {
    //   только для перерисовывания инпута, не для сабмита
    name: '',
    tag: '',
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = e => {
    //            1
    // console.log(e.currentTarget); //ссылка на элемент
    // console.log(e.currentTarget.value); //то что вводится на клаве
    // console.log(e.currentTarget.name); // в какой state

    // //   через вычисляемые свойства обьекта
    // //   const a = 'b'; -> [a]: 5; ->  { b: 5 }
    // this.setState({
    //   [e.currentTarget.name]: e.currentTarget.value,
    // });

    //            2
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state); //{name: 'введенное значение', tag: 'введенное значение'}
    this.props.onSubmit(this.state); //перекинуть данные наверх -><Form onSubmit={this.formSubmitHandler} />
    this.reset(); //вызов метода reset
  };

  reset = () => {
    // передать начальное состояние state
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      //  onSubmit отвечает за событие submit
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            //   onChange={this.handleNameChange} заменяем на handleChange
            onChange={this.handleChange}
            id={this.nameInputId} //shortid
          />
        </label>

        <label htmlFor={this.tagInputId}>
          Nickname
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            //   onChange={this.handleTagChange} заменяем на handleChange
            onChange={this.handleChange}
            id={this.tagInputId}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    );
  }
}
export default Form;

// {
//   /* onSubmit отвечает за событие submit */
//
