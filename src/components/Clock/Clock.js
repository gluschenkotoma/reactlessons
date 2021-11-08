import React, { Component } from 'react';
import s from './Clock.module.scss';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null; //записать интервал в переменную что бы можно было очистить

  componentDidMount() {
    console.log('setInterval');

    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  }
  //при розмонтировании почистить интервал
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div className={s.clock__face}>{this.state.time}</div>;
  }
}
