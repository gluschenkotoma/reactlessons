import PropTypes from 'prop-types';

import UserMenu from './UserMenu';
// import  Friends  from '../Friends/Friends'; -> если export default
import { Friends } from '../Friends/Friends';

function User({ name, age, friends, myMethod }) {
  return (
    <>
      {/* <Friends friends={friends} -> без детей /> */}
      {/* <Friends>...</Friends>   ...дети  */}
      {/* friends={friends} фу-я по условию с Friend.js */}
      <Friends friends={friends}>
        <p>Friends children</p>
        <p>Friends children</p>
        <p>Friends children</p>
        Просто текст в чилдренах
      </Friends>
      <UserMenu />
      {/* если name есть верни <h1>{name}</h1>, в противном случае <p>Имя не передано!</p>*/}
      {name ? <h1>{name}</h1> : <p>Имя не передано!</p>}

      <p>{age}</p>

      <button
        type="button"
        // onClick={() => {
        //   alert('You press on button!');
        // }}
        onClick={myMethod}
      >
        Click
      </button>
    </>
  );
}

export default User;

// User.defaultProps = {
//   name: 'DefaultProps',
// };
User.propTypes = {
  name: PropTypes.string.isRequired, //ptsr
  age: PropTypes.number, //ptn
  friends: PropTypes.array,
};
