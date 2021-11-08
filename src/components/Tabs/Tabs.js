import React, { PureComponent } from 'react';
// PureComponent- альтернатива shouldComponentUpdate

class Tabs extends PureComponent {
  // хранение активного таба
  state = {
    activeTabIdx: 0,
  };

  // // предотвратить лишний ререндер при import React, { Component } from 'react';
  // shouldComponentUpdate(nextProps, nextState) {
  //   // перерендеривать когда эти табиндексы не равны, при нажатии на таб 3 два раза они будут равны
  //   return nextState.activeTabIdx !== this.state.activeTabIdx;
  // }

  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    console.log(`Re-render @ ${Date.now()}`);

    const { activeTabIdx } = this.state;
    const { items } = this.props;
    // выбор активного таба по индексу
    const activeTab = items[activeTabIdx];

    return (
      <>
        <div>
          {/* мап жейсон, для каждого создается кнопка с привязкой setActiveTabIdx , 
          что бы активный индекс записать в стейт,после чего выбираю обьект табов который нужен 
           const activeTab = items[activeTabIdx];, и рендер разметки <div><h2>{activeTab.label}</h2><p>{activeTab.content}</p> </div>*/}
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              // привязать индекс по клику
              onClick={() => this.setActiveTabIdx(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}
export default Tabs;
