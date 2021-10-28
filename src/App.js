import './App.css';
import User from './components/User/User';

const friends = [
  { id: 1, name: 'Jakov', age: 4 },
  { id: 2, name: 'Taras', age: 47 },
];

function App() {
  const sayHello = () => {
    console.log(`Hello!`);
  };
  return (
    <>
      <User name="Tamara" age="38" friends={friends} myMethod={sayHello} />
      <h1>Lesson1</h1>
    </>
  );
}

export default App;
