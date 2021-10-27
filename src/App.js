// import Painting from "./components/Painting";
import PaintingList from './components/PaintingList';
import paintings from './js/paintings.json';
import Section from './components/Section';
export default function App() {
  return (
    <div>
      <Section title="Toп недели">
        <PaintingList items={paintings} />
      </Section>

      <Section />
    </div>
  );
}

// export default function App() {
//   return (
//     <div>
//       {paintings.map((painting) => (
//         <Painting
//           key={painting.id}
//           imageUrl={painting.url}
//           title={painting.title}
//           author={painting.author.tag}
//           profileUrl={painting.author.url}
//           price={painting.price}
//           quantity={painting.quantity}
//         />
//       ))}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       {/* зарендерится строка */}
//       [1,2,3,4,5]
//       {/* зарендерится как отдельный независимый элемент */}
//       {[1, 2, 3, 4, 5]}
//       {/* получить колекцию элементов */}
//       {[1, 2, 3, 4, 5].map((el) => (
//         <div>(el)</div>
//       ))}
//     </div>
//   );
// }

// РЕНДЕР 1 карточки
// export default function App() {
//   return (
//     <div>
//       <Painting
//         imageUrl={paintings[0].url}
//         title={paintings[0].title}
//         author={paintings[0].author.tag}
//         profileUrl={paintings[0].author.url}
//         price={paintings[0].price}
//         quantity={paintings[0].quantity}
//       />;
//     </div>)
// }
