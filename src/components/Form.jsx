import { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    surname: '',
    patronymic: '',
    description: '',
  };
  handleChange = e => {
    this.setState({
      name: e.target.value,
    });
  };
  handleChangeS = e => {
    this.setState({
      surname: e.target.value,
    });
  };
  handleChangeP = e => {
    this.setState({
      patronymic: e.target.value,
    });
  };
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
        <div>
          <label>
            Name
            <input type="text" value={name} onChange={this.handleChange} />
          </label>
        </div>

        <div>
          <label>
            Surname
            <input type="text" value={surname} onChange={this.handleChangeS} />
          </label>
        </div>

        <div>
          <label>
            Patronymic
            <input
              type="text"
              value={patronymic}
              onChange={this.handleChangeP}
            />
          </label>
        </div>
        <label>
          Description
          <div>
            <textarea value={description} onChange={this.handleChangeD} />
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
export { Form };
