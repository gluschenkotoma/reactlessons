import React from 'react';
import Counter from './components/Counter'; //импорт каунтера
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];
const App = () => (
  <>
    {/* <h1>Сoстояние компонента</h1> */}
    {/* рендер каунтера */}
    {/* initialvalue - єто передача state с этого значения {0} в классе -> state = {value: this.props.initialValue,};*/}
    <Counter initialValue={10} />

    <Dropdown />

    <ColorPicker options={colorPickerOptions} />
  </>
);
export default App;
