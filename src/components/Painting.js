import PropTypes from 'prop-types';

// ВСЕГДА 1 параметр PROPS
export default function Painting(props) {
  const { imageUrl, title, profileUrl, author, price, quantity } = props;
  console.log(props);
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена:{price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

// Проптайпы прописываются для каждого пропа
Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

// arrow
// const function Painting(props) => {
//   const { url, title, profileUrl, author, price } = props;
//   console.log(props);
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор: <a href={profileUrl}>{author}</a>
//       </p>
//       <p>Цена:{price} кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// }
// export default Painting
//
// true && 1 // 1
// false && 1 //false
// 0 && 2 // 0

// true||1 //true
// false || 1 //1
//
