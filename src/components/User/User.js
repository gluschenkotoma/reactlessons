import PropTypes from 'prop-types';
// импорт обычного файла стилей
import './User.css';
import s from './User.module.css';
import UserMenu from './UserMenu';
// import  Friends  from '../Friends/Friends'; -> если export default
import { Friends } from '../Friends/Friends';
//затянуть компонент с bootstrap
import { Button } from 'react-bootstrap';

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
      {/* рендер по условию */}
      {/* если name есть верни <h1>{name}</h1>, в противном случае <p>Имя не передано!</p>*/}
      {name ? <h1>{name}</h1> : <p>Имя не передано!</p>}
      <p>{age}</p>
      {/* bootstrap component */}
      <Button
        clasName={s.moduleBtn}
        // style={{ backgroundColor: 'purple' }}
        variant="warning"
      >
        Warning
      </Button>{' '}
      <button
        className="userBtn"
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
