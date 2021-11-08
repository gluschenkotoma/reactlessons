import React, { Component } from 'react';
import { createPortal } from 'react-dom'; //создать портал (в index.html <div id="modal-root"></div>)
import s from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  // фу-я монтирования
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // фу-я размонтирования, очистить слушатель
  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  //фу-я закрытия модалки по Esc
  handleKeyDown = e => {
    // console.log(e.code);
    if (e.code === 'Escape') {
      // console.log('Нажали на esc, нужно  закрыть модалку');
      // пропс переданый с App,фу-я закрытия/открытия модалки
      this.props.onClose();
    }
  };
  handleBackdropClick = event => {
    // console.log('Кликнули в бекдроп');
    // console.log('currentTarget', event.currentTarget);
    // console.log('target', event.target);
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    // createPortal -> 1 arg - разметка модалки , 2 arg - ссылка на портал #modal-root
    return createPortal(
      <div className={s.modal__backdrop} onClick={this.handleBackdropClick}>
        {/*his.props.children - это для того что бы ставить разметку не в этом месте, а там где ставится модалка, переиспользованый компонент   */}
        <div className={s.modal__content}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;

// монтирование:consrtuctor-render-reactDOM-компонент замаунтился(componentDidMount)
// Вызывается 1 раз когда смонтироваляся

// Обновление:new props+setState()+forceUpdate()-render-reactDOM-componentDidUpdate()
//Вызывается каждый раз при обновлении компонентов сетстейтов

// Размонтирование-ComponentWillUnmount-очистка слушателей,таймаутов, запросов
// Вызывается 1 раз перед уничожением компонентов

// getDerivedstateFromProps
//shouldComponentUpdate - должен ли обновится наш компонент, можно запретить компоненту обновляться
// getSnapShotBeforeupdate- прочитать значение дом дерева прямо перед обновлением
