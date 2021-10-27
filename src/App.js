import PaintingList from './components/PaintingList';
import paintings from './paintings.json';
import Section from './components/Section';

function App() {
  return (
    <div>
      <Section title="Toп недели">
        <PaintingList items={paintings} />
      </Section>
      <Section />
    </div>
  );
}
export default App;
