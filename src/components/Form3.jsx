import { Component } from 'react';
import { Input3 } from './Input3';

class Form3 extends Component {
  state = {
    name: '',
    surname: '',
    patronymic: '',
    description: '',
  };
  //    аргумент с handleChange инпута
  handleChange = ({ name, value }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('state', this.state);
  };
  render() {
    const { name, surname, patronymic, description } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Form3</h2>

        <Input3
          name="name"
          labelName="Name"
          value={name}
          onChange={this.handleChange}
        />

        <Input3
          name="surname"
          labelName="Surname"
          value={surname}
          onChange={this.handleChange}
        />

        <Input3
          name="patronymic"
          labelName="Patronymic"
          value={patronymic}
          onChange={this.handleChange}
        />

        <Input3
          type="textarea"
          name="description"
          labelName="Description"
          value={description}
          onChange={this.handleChange}
        />

        <div>
          <button type="submit" onChange={this.handleSubmit}>
            Add teacher
          </button>
        </div>
      </form>
    );
  }
}
export { Form3 };
