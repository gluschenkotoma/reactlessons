import React from 'react';

import './Counter.css';

// сделать класс -> class Name extends React.Component
class Counter extends React.Component {
  // СТАТИКА===================
  // если не прописать в App значение initialvalue -> <Counter initialvalue={} />, то сломается верстка, поэтому прописывается дефолтное значение
  static defaultProps = { initialValue: 0 };
  static propTypes = {
    //
  };
  // CОСТОЯНИЕ======================
  //обьявление состояния OLDSCHOOL
  //   constructor() {
  //     super(); //вызов конструктора родителя
  //     //   состояние конструктора -> хранение данных, обьект со свойствами, данные, методов не может быть
  //     // использование state ->{this.state.value}
  //     //   модель
  //     this.state = {
  //       value: 5,
  //     };
  //   }

  // обьявление состояния TODAY
  //   state = {
  //     value: 5,
  //   };
  // если нужно обьявить через пропсы. App -> <Counter initialvalue={0} />
  state = {
    value: this.props.initialValue,
  };

  //    METHODS =====================
  //   handleIncrement() {
  //     console.log('Clicked on button increment');
  //     console.log(this); //undefined,при передаче метода как обработчика события, у обьекта не привязывается контекст по умолчанию, поэтому нужно сделать публичный метод класа(handleIncrement =) и сделаь как стрелочную фу-ю,ниже пример
  //   }

  //  Получить доступ к EVENT -> доступ к обьекту события ->handleIncrement = (event) => {

  handleIncrement = () => {
    // console.log('Clicked on button increment');
    // console.log(this); //Сылка на экземпляр->Counter {props: {…}, context: {…}, refs: {…}, updater: {…}, handleIncrement: ƒ, …}
    // console.log(event); //SyntheticEvent Object->{_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …}
    // console.log(event.target); //<button type="button">Увеличить на 1</button>
    //поскольку ссылка event  очищается после синхронного - console.log('Clicked on button increment');, то в setTimeout в console.log(target) бувут null, поэтому если event нужно использовать в асинхронном коде event.target выносится в одельную переменную
    // const target = event.target;
    // setTimeout(() => {
    //   // console.log(event.target);//null,работать не будет
    //   console.log(target);
    // }, 1000);

    //   МЕТОД обновления состояния  SETSTATE, this.setState()-просто вызов метода

    //   записать новое не основываясь напредыдущем, передача обьекта, ассинхронная операция, обновление после всего синхронного кода
    // this.setState({
    //   value: 0,
    // });

    //записать новое от предыдущего состояния это передача не обьекта а функции
    //   prevState - параметр актуального состояния
    //   prevState.value ссылка на обьект state
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    // console.log('Clicked on button decrement');
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  // METHOD RENDER ====================================
  // -> метод класа, возвращает разметку jsx
  render() {
    return (
      <div className="Counter">
        {/* значение 0 берется с хранилища state со свойства value*/}
        {/* шаблон со значением модели, шаблон зависит от модели */}
        <span className="Counter__value">{this.state.value}</span>
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
