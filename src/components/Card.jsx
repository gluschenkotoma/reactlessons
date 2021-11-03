function Card({ id, name = 'no name' }) {
  //   const { id, name } = props;
  //   console.log('props', props); //props {id: 1, name: 'Nataly'}

  const handleClick = () => {
    alert(name);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <p key={id}>{name}</p>
      <button onClick={handleClick}>Show name in Alert</button>
    </div>
  );
}
export { Card };

// Card.defaultProps = {
//     name: "no name"
// }
