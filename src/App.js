import React from 'react';
import Counter from './components/Counter/Counter'; //импорт каунтера
// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
const App = () => (
  <>
    <h1>Сoстояние компонента</h1>
    {/* рендер каунтера */}
    <Counter />
  </>
);
export default App;
