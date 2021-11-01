import React from 'react';
// const Controls = () => (
// добавить 2 пропа ({})->const Controls = ({onIncrement, onDecrement}) и поставить их в слушатели->onClick={onDecrement}, в <Controls /> передать эти пропы и в пропах ссылка на метод-><Controls onIncrement={this.handleIncrement} onDecrement={ this.handleDecrement}/>
const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button
      type="button"
      // 1.повесить событие onClick={() => {}}-инлайн функция колбэк, регистрация, this по умолчанию будет ссылаться на экземпляр класса
      // onClick={() => {
      //   console.log('Clicked on button increment');
      // }}
      // 2.вынести онлайн колбэк в метод класса

      // Поднятие состояния,добавить 2 пропа в  const Controls = () => (, сменить this.handleIncrement на пропсы
      //   onClick={this.handleIncrement}
      onClick={onIncrement}
    >
      Увеличить на 1
    </button>
    <button
      type="button"
      // Поднятие состояния
      //   onClick={this.handleDecrement}
      onClick={onDecrement}
    >
      Уменьшить на 1
    </button>
  </div>
);
export default Controls;
