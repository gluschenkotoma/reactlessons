import React, { Component } from 'react';
import Form from './components/Forms';

class App extends Component {
  state = {
    inputValue: '',
  };

  // метод который определит состояние и обновит значения state
  handleInputChange = event => {
    //   обновить state не основываясь на предыдущем state
    this.setState({ inputValue: event.currentTarget.value });
  };

  // метод для инпут в которых есть name и value

  //   handleNameChange = event => {
  //     this.setState({ name: event.currentTarget.value });
  //   };
  //   handleTagChange = event => {
  //     this.setState({ tag: event.currentTarget.value });
  //   };

  // метод отправки формы через пропс onSubmit
  // переменная data хранит ссылку на this.state метода handleSubmit
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <input
          type="text"
          value={this.state.inputValue} //значения инпута зависит от state
          onChange={this.handleInputChange} // метод будет обновлять state при каждом вводе текста
        />
      </>
    );
  }
}

export default App;

// 2 события для инпутов в обычном ДОМе:
// - change - когда ставите и убираете фокус из элемента
// - input - работает при каждом вводе в него, когда печатаем

// В React ис-ся только onChange - это тоже самое что и input в DOM, и комбинирует получение и потерю фокуса
