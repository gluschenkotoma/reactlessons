function Card(props) {
  const { id, name } = props;
  console.log('props', props);
  return <p key={id}>{name}</p>;
}
export { Card };
