import React, { Component } from 'react';
import classNames from 'classnames';
import './Colorpicker.css';

class ColorPicker extends Component {
  // сохранить выбранную текущую опцию, сохранив в state ее индекс,
  // [this.state.activeOptionIdx] будет хранить ссылку на элемент(обьект)
  state = {
    activeOptionIdx: 0,
  };
  setActiveIdx = index => {
    //поверх записать новый индекс
    this.setState({ activeOptionIdx: index });
  };
  makeOptionClassName = index => {
    // 1 библиотека classNames
    // базовые класы, в {}- которые зависят от условия
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === this.state.activeOptionIdx,
    });

    // 2 // базовый класс
    // const optionClasses = ['ColorPicker__option'];
    // // если index равен с индексом масива this.state.activeOptionIdx, то добавить класс,если нет то - none * /}
    // //  в зависимости от этого -> index === this.state.activeOptionIdx ->добавить клас
    // if (index === this.state.activeOptionIdx) {
    //   optionClasses.push('ColorPicker__option--active');
    // }
    // return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {/* this.props.options = options={colorPickerOptions} App*/}

          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
