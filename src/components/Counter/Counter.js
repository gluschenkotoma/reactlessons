import React from 'react';

import './Counter.css';

// сделать класс -> class Name extends React.Component
class Counter extends React.Component {
  //   handleIncrement() {
  //     console.log('Clicked on button increment');
  //     console.log(this); //undefined,при передаче метода как обработчика события, у обьекта не привязывается контекст по умолчанию, поэтому нужно сделать публичный метод класа(handleIncrement =) и сделаь как стрелочную фу-ю,ниже пример
  //   }

  //  Получить доступ к EVENT -> доступ к обьекту события ->handleIncrement = (event) => {

  handleIncrement = event => {
    console.log('Clicked on button increment');
    console.log(this); //Сылка на экземпляр->Counter {props: {…}, context: {…}, refs: {…}, updater: {…}, handleIncrement: ƒ, …}
    console.log(event); //SyntheticEvent Object->{_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …}
    console.log(event.target); //<button type="button">Увеличить на 1</button>

    //поскольку ссылка event  очищается после синхронного - console.log('Clicked on button increment');, то в setTimeout в console.log(target) бувут null, поэтому если event нужно использовать в асинхронном коде event.target выносится в одельную переменную
    const target = event.target;
    setTimeout(() => {
      // console.log(event.target);//null,работать не будет
      console.log(target);
    }, 1000);
  };

  handleDecrement = () => {
    console.log('Clicked on button decrement');
  };
  // render -> метод класа, возвращает разметку jsx
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">0</span>
        <div className="Counter__controls">
          <button
            type="button"
            // 1.повесить событие onClick={() => {}}-инлайн функция колбэк, регистрация, this по умолчанию будет ссылаться на экземпляр класса
            // onClick={() => {
            //   console.log('Clicked on button increment');
            // }}
            // 2.вынести онлайн колбэк в метод класса
            onClick={this.handleIncrement}
          >
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
