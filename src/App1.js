import React, { Component } from 'react';

import Modal from './components/Modal';
// import Clock from './components/Clock';
import Tabs from './components/Tabs';
import items from './tabs.json';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    console.log('App render');
    const { showModal } = this.state;
    return (
      <>
        <Tabs items={items} />

        <button type="button" onClick={this.toggleModal}>
          Open ModalWindow
        </button>
        {/* если showModal true - то рендерь <Modal />*/}
        {showModal && (
          // пропс для модалки onClose={this.toggleModal}
          <Modal onClose={this.toggleModal}>
            <h1>Это контент модалки как чилдрен!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              provident obcaecati debitis delectus quasi, aperiam commodi
              nostrum voluptas minus culpa, a numquam rem itaque fuga qui,
              asperiores sint suscipit eius vero explicabo? Dolorum tenetur
              rerum ad quam veritatis, quos totam pariatur fuga doloremque, vero
              omnis eos atque repudiandae fugit beatae officiis in delectus
              nulla eum cumque odit nemo enim. Cupiditate debitis ut dolorem
              facilis vel omnis ab ducimus, similique quibusdam eius laudantium,
              eos, officia repudiandae quas? Nostrum excepturi corrupti voluptas
              ex expedita placeat officia suscipit repellendus possimus
              perferendis atque, voluptate totam unde nemo itaque recusandae
              illum mollitia commodi explicabo natus.
            </p>
            <button type="button" onClick={this.toggleModal}>
              close ModalWindow
            </button>
          </Modal>
        )}
        {/* <Clock /> */}
      </>
    );
  }
}
export default App;

// монтирование:consrtuctor-render-reactDOM-компонент замаунтился(componentDidMount)
// Вызывается 1 раз когда смонтироваляся

// Обновление:new props+setState()+forceUpdate()-render-reactDOM-componentDidUpdate()
//Вызывается каждый раз при обновлении компонентов сетстейтов

// Размонтирование-ComponentWillUnmount-очистка слушателей,таймаутов, запросов
// Вызывается 1 раз перед уничожением компонентов

// getDerivedstateFromProps
//shouldComponentUpdate - должен ли обновится наш компонент, можно запретить компоненту обновляться
// getSnapShotBeforeupdate- прочитать значение дом дерева прямо перед обновлением
