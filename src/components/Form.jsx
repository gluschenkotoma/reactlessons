import { Component } from 'react';
import { Input } from './Input';
import { Button } from './Button/Button';

class Form extends Component {
  state = {
    name: '',
    surname: '',

    description: '',
  };

  handleChange = ({ value, name }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('state', this.state); //стейт после ввода state {name: 'Toma', surname: 'Gluschenko', description: 'teacher of react'}
    // вызов метода handleAddTeacher который записаный <Form onSubmit={this.handleAddTeacher}
    this.props.onSubmit(this.state);
    //принимает key  название поля где будем хранить - teacher,JSON.stringify(this.state) для полей обьекта
    // localStorage.setItem('teacher', JSON.stringify(this.state)); //componentDidMount -const formValues = JSON.parse(localStorage.getItem('teacher')); с проверкой
    // почистить стейт после сабмита
    this.setState({
      name: '',
      surname: '',
      description: '',
    });
  };

  render() {
    console.log('render');
    const { name, surname, description } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="name"
          labelName="Name"
          value={name}
          onChange={this.handleChange}
        />
        <Input
          name="surname"
          labelName="Surname"
          value={surname}
          onChange={this.handleChange}
        />

        <Input
          type="textarea"
          name="description"
          labelName="Description"
          value={description}
          onChange={this.handleChange}
        />
        <Button type="submit" name="Добавить преподавателя" />
      </form>
    );
  }
}

export { Form };
