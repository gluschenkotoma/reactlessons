import React from 'react';

import styles from './Button.module.css';

function Button({ name, type, onClick }) {
  // const { name, type, onClick } = this.props;

  return (
    <button type={type} className={styles.base} onClick={onClick}>
      {name}
    </button>
  );
}

Button.defaultProps = {
  name: 'Добавить',
};

export { Button };
