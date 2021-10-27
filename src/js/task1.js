import paintings from './paintings.json';
import React from 'react'; //не обяз при создании jsx
import ReactDOM from 'react-dom'; //зарендерить
// ПРИМЕР1================================
//props: {a: 5, b: 10, children: 'hello'}
const el = React.createElement('div', {
  a: 5,
  b: 10,
  // children: [el1, " ", el2],
  children: 'Привет мир!!',
});
console.log(el);
ReactDOM.render(el, document.querySelector('#root')); //что зарендерить , куда зарендерить
