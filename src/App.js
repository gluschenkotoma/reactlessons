import { Button } from './components/Button';
import { Card } from './components/Card';

const teachers = [
  { id: 1, name: 'Nataly' },
  { id: 2, name: 'Toma' },
  { id: 3, name: 'Jackov' },
  { id: 4 },
];
function App() {
  return (
    <>
      {teachers.map(teacher => (
        <Card key={teacher.id} id={teacher.id} name={teacher.name} />
      ))}
      <Button name="add teacher" />
      <Button />
    </>
  );
}
export default App;
