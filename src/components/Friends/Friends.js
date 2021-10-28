import PropTypes from 'prop-types';

export function Friends({ friends, children }) {
  return (
    <>
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
      {/* Чилдрены c User */}
      <div>{children}</div>
    </>
  );
}

Friends.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ), //ptao +ptsh +ptet +pts +ptet
};
