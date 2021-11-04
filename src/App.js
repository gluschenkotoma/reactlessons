import React, { Component } from 'react';
import { Form } from './components/Form';
import { Form2 } from './components/Form2';
import { Form3 } from './components/Form3';

class App extends Component {
  state = {
    value: '',
  };

  // обработчик который будет обновлять state  динамического value(ввод в инпут)
  handleChange = e => {
    console.log('e.currentTarget.value', e.currentTarget.value); //при вводе символа r в инпут 5раз в консоли будет- (5) e.currentTarget.value r, получаем контролируемый ввод значений в инпут
    // this.setState(e.currentTarget.value);
  };
  render() {
    return (
      <>
        <Form />

        <Form2 />

        <Form3 />
      </>
    );
  }
}

export default App;
