import { Component } from 'react';

class Input3 extends Component {
  static defaultProps = {
    type: 'input',
  };
  handleChange = e => {
    // console.log('e', e); //в поле target есть name: "name"
    const { name, value } = e.target;
    // this.props.onChange({ name: name, value: value }); //метод onChange пришедший с пропс формы, которому передается значение инпута
    this.props.onChange({ name, value }); //метод onChange пришедший с пропс формы, которому передается значение инпута
  };
  render() {
    // console.log('input props', this.props, 'state :', this.state); //input props {labelName: 'Patronymic', value: '', onChange: ƒ} state : null
    const { labelName, value, name, type } = this.props;
    return (
      <div>
        <label>
          {labelName}
          {type === 'input' ? (
            <input
              type="text"
              name={name}
              value={value}
              onChange={this.handleChange}
            />
          ) : (
            <textarea name={name} value={value} onChange={this.handleChange} />
          )}
        </label>
      </div>
    );
  }
}
export { Input3 };
