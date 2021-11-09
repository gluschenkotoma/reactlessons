import { Card } from './Card';

// что бы что то считать нужно указать items = [] пустой массив, потому что items- будет underfined
function List({ items = [] }) {
  return (
    <>
      {items.map(item => (
        <Card
          key={item.id}
          name={item.name}
          surname={item.surname}
          description={item.description}
        />
      ))}
    </>
  );
}

export { List };
