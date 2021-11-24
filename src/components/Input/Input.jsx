// import { Component } from 'react';

import './styles.css';

function Input({ type = 'input', onChange, labelName, name, value }) {
  // static defaultProps = {
  //   type: 'input',
  // };

  const handleChange = e => {
    const { value } = e.target;
    onChange(value);
  };

  // const { labelName, name, value, type } = this.props;

  return (
    <div>
      <label>
        {labelName}
        {type === 'input' ? (
          <input
            name={name}
            type="text"
            value={value}
            onChange={handleChange}
            className="input"
          />
        ) : (
          <textarea name={name} value={value} onChange={handleChange} />
        )}
      </label>
    </div>
  );
}

export { Input };
