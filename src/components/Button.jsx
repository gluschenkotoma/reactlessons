import { Component } from 'react';

class Button extends Component {
  //   state = {
  //     teachers: [],
  //     clicked: false,
  //     };
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      clicked: true,
    };
    this.handleAdd = this.handleAdd.bind(this); // получение this, возможность ссылаться на внешний контекст
  }

  handleAddArrow = () => {
    console.log('handleAddArrow', this); //handleAddArrow Button {props: {…}, context: {…}, refs: {…}, updater: {…}, handleAddArrow: ƒ, …}
  };
  handleAdd() {
    console.log('handle add', this); //handle add undefined
  }
  render() {
    return (
      <>
        <p>{this.state.clicked.toString()}</p>
        <button type="button" onClick={this.handleAddArrow}>
          Add teacher arrow
        </button>
        <button type="button" onClick={this.handleAdd}>
          Add teacher
        </button>
      </>
    );
  }
}

export { Button };
