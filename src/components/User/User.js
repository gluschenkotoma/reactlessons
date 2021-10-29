import PropTypes from 'prop-types';
// импорт обычного файла стилей
import './User.css';
import s from './User.module.css';
import UserMenu from './UserMenu';
// import  Friends  from '../Friends/Friends'; -> если export default
import { Friends } from '../Friends/Friends';
//затянуть компонент с bootstrap
import { Button } from 'react-bootstrap';
//библиотека 'styled-components'
import styled from 'styled-components';
// импорт изображения
// import img1 from '../../images/img1.jpeg';
//импорт компонента Icons
import { Icons } from '../../components/Icons';

//  стили компонента Styles с биб.styled-components'
const Styles = styled.section`
  .styleBtn {
    background: black;
    color: white;
  }
`;

function User({ name, age, friends, myMethod }) {
  return (
    <div className={s.wrapper}>
      {/* спрайт */}
      <ul>
        <li>
          <Icons
            name="instagram-icon"
            className="svg"
            color="blue"
            stroke="red"
            width="100"
            // height="30"
          />
        </li>
      </ul>
      {/* <img src={img1} width="100px" alt="img" /> */}
      {/* библиотека 'styled-components' компонент Styles с класом styleBtn*/}
      <Styles>
        <button
          className="userBtn styleBtn"
          type="button"
          // onClick={() => {
          //   alert('You press on button!');
          // }}
          onClick={myMethod}
        >
          Click
        </button>
      </Styles>
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
    </div>
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
