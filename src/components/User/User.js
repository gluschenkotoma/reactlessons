import UserMenu from './UserMenu';
function User({ name, age, friends, myMethod }) {
  return (
    <>
      {/* если name есть верни <h1>{name}</h1>, в противном случае <p>Имя не передано!</p>*/}
      {name ? <h1>{name}</h1> : <p>Имя не передано!</p>}
      <p>{age}</p>
      <UserMenu />
      <button
        type="button"
        // onClick={() => {
        //   alert('You press on button!');
        // }}
        onClick={myMethod}
      >
        Click
      </button>
      <ul>
        {/* функция по условию*/}
        {friends.length > 0 &&
          friends.map(friend => {
            return (
              <li key={friend.id}>
                <h3>{friend.name}</h3>
                <p>{friend.age}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default User;

// User.defaultProps = {
//   name: 'DefaultProps',
// };
