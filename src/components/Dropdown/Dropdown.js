import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    // буль true || false
    visible: false,
  };

  //1 вариант // 2 метода которые будут изменять буль на true || false с перезаписью state
  // show = () => {
  //   //не от предыдущего а просто перезаписать state. this.setState от предыдущего - фу-я, перезапись - обьект
  //   this.setState({ visible: true });
  // };
  // hide = () => {
  //   this.setState({ visible: false });
  // };

  // 2 вариант, 1 метод который делает изменения от предыдущего state
  // visible: !prevState.visiblev-если там был true - станет false, и наоборот
  toggle = () => {
    return this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className="Dropdown">
        {/* 1 вариант где 2 кнопки */}
        {/* <button type="button" className="Dropdown__toggle" onClick={this.show}>
          Показать
        </button>
        <button type="button" className="Dropdown__toggle" onClick={this.hide}>
          Скрыть
        </button> */}
        {/* {x && Y} если х приводится к true то рендерится Y // если в */}
        {/* this.state.visible:true то рендерится эта разметка */}
        {/* {this.state.visible && (
          <div className="Dropdown__menu">Выпадающее меню</div>
        )} */}

        {/* 2 вариант 1 кнопка тогл */}
        {/* название кнопки скрыть и показать меняем тернарным оператором */}
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.visible ? 'HIDE' : 'SHOW'}
        </button>
        {this.state.visible && (
          <div className="Dropdown__menu">Выпадающее меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
