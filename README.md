# react-21-22

- [Настраиваем линтинг перед коммитом](https://github.com/goitacademy/react-lint-config)
- [Абсолютные импорты](https://create-react-app.dev/docs/importing-a-component/#absolute-imports)
- Распыление пропсов на примере `PaintingList` и `Painting`
- Нормализация стилей:
  - [PostCSS Normalize](https://create-react-app.dev/docs/adding-css-reset)
  - [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- Ванильный CSS и препроцессоры
- Инлайн стили
- CSS-модули
  - Композиция с `composes`
  - Переменные
- CSS in JS
- Про библиотеки компонентов // import PaintingList from
  './components/PaintingList'; // import ColorPicker from
  './components/ColorPicker/ColorPicker'; // import Alert from
  './components/Alert/Alert'; import Container from
  './components/Container/Container'; import Box from './components/Box/Box'; //
  import paintings from './paintings.json';

- // const colorPickerOptions = [ // { label: 'red', color: '#F44336' }, // {
  label: 'green', color: '#4CAF50' }, // { label: 'blue', color: '#2196F3' }, //
  { label: 'grey', color: '#607D8B' }, // { label: 'pink', color: '#E91E63' },
  // { label: 'indigo', color: '#3F51B5' }, // ];

export default function App() { return ( <Container> <Box type="small"
classNames="big red" styles={{ color: '#fff' }} /> <Box type="medium" />
<Box type="large" /> {/_ <Alert text="Шеф все пропало!" type="success" /> _/}
{/_ <Alert text="Шеф все пропало!" type="warning" /> _/} {/_
<Alert text="Шеф все пропало!" type="error" /> _/} {/_
<ColorPicker options={colorPickerOptions} /> _/} {/_
<PaintingList items={paintings} /> _/} </Container> ); }
