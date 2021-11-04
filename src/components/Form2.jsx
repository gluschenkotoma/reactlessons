import { Component } from 'react';
import { Input } from './Input';

class Form2 extends Component {
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
  //   handleChangeS = value => {
  //     this.setState({
  //       surname: value,
  //     });
  //   };
  //   handleChangeP = value => {
  //     this.setState({
  //       patronymic: value,
  //     });
  //   };
  handleChangeD = e => {
    this.setState({
      description: e.target.value,
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
        <h2>Form2</h2>

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
          name="patronymic"
          labelName="Patronymic"
          value={patronymic}
          onChange={this.handleChange}
        />

        <label>
          Description
          <div>
            <textarea
              name="description"
              value={description}
              onChange={this.handleChangeD}
            />
          </div>
        </label>

        <div>
          <button type="submit" onChange={this.handleSubmit}>
            Add teacher
          </button>
        </div>
      </form>
    );
  }
}
export { Form2 };
