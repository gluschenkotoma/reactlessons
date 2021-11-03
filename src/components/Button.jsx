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

    // this.handleAdd = this.handleAdd.bind(this); // получение this, возможность ссылаться на внешний контекст
  }
  static defaultProps = {
    name: 'Add',
  };

  handleAddArrow = () => {
    // console.log('handleAddArrow', this); //handleAddArrow Button {props: {…}, context: {…}, refs: {…}, updater: {…}, handleAddArrow: ƒ, …}

    for (let i = 0; i < 3; i += 1) {
      console.log('Before setState', this.state.clicked); //Before setState true (3)
      //
      // this.setState({
      //   clicked: false,
      // });

      this.setState(prev => {
        console.log('i', i); //i 0,i 1,i 2
        console.log('prev', !prev.clicked); //prev false,prev true,prev false
        return {
          clicked: !prev.clicked,
        };
      });
      console.log('After setState', this.state.clicked); //After setState true(3)
    }
  };

  //   handleAdd() {
  //     console.log('handle add', this); //handle add undefined
  //   }

  render() {
    const { name } = this.props;
    return (
      <>
        <p>{this.state.clicked.toString()}</p>
        <button type="button" onClick={this.handleAddArrow}>
          {name}
        </button>
        {/* <button type="button" onClick={this.handleAdd}>
          Add teacher
        </button> */}
      </>
    );
  }
}

export { Button };
