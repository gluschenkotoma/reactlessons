import React from 'react';
import { Button } from './Button/Button';

import { Form } from './Form';
import { List } from './List';
import { Header } from './Header';

class Section extends React.Component {
  state = {
    showed: true,
    items: [],
  };
  // берет данные с локал сторедж
  componentDidMount() {
    console.log('called section componentDidMount');
    const itemsLS = JSON.parse(localStorage.getItem('teacher'));

    if (itemsLS) {
      this.setState({ items: itemsLS }); //обновить state
    }
  }

  componentDidUpdate() {
    console.log('вызывается Section componentDidUpdate', this.state.items); //олучает компоненты
    localStorage.setItem('teacher', JSON.stringify(this.state.items));
  }

  handleToggle = () => {
    this.setState(prevState => ({ showed: !prevState.showed }));
  };
  // сохраняет (item) данные из локалсторедж
  handleAddItem = item => {
    //   или перенести в componentDidUpdate
    // localStorage.setItem(
    //   'teacher',
    //   JSON.stringify([...this.state.items, item]),
    // );
    //   обновление локального стейта
    this.setState(prevState => ({ items: [...prevState.items, item] }));
  };

  render() {
    console.log('Section Render');
    return (
      <>
        <Header size="h2" title="List of teachers" />
        <List items={this.state.items} />
        <br />
        <Button
          name={this.state.showed ? 'Hide Form' : 'Show Form'}
          onClick={this.handleToggle}
        />
        <hr />

        <br />
        {this.state.showed ? <Form onSubmit={this.handleAddItem} /> : null}
      </>
    );
  }
}
export { Section };
// Section {items}
//    Form
//       Input 2
//       Button submit
//    List
//       ListItem
