import { useEffect, useState } from 'react';
import { Input } from './Input/Input';
import { Button } from './Button/Button';

// const INITIAL_FORM_VALUES = {
//   name: '',
//   surname: '',
//   description: '',
// };
function Form({ onSubmit }) {
  // const [values, setValues] = useState(INITIAL_FORM_VALUES);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [description, setDescription] = useState('');

  //
  useEffect(() => {
    console.log('useEffect: componentDidMount');
    window.addEventListener('scroll', onScroll, false);
    return () => {
      console.log('useEffect: componentWillUnmount');
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  // componentDidMount() {
  //   window.addEventListener('scroll', this.onScroll, false);
  // }

  // componentWillUnmount() {
  //   console.log('FORM componentWillUnmount')
  //   window.removeEventListener('scroll', this.onScroll, false);
  // }

  const onScroll = () => {
    console.log('scroll happened');
  };

  // 1-switchcase - switch(name) {case "name":setName(value) break},
  // 2- не используется handleChange = а используется обработчик для каждого поля,onChange={setName},onChange={setSurname},onChange={setDescription}+ input.jsx-> handleChange = e => {const { value } = e.target; this.props.onChange({ value });};+ function Form({onSubmit}) заходит пропс
  // 3 | input.jsx->  handleChange = e => {const { value, name } = e.target;this.props.onChange({ value, name }); };
  // const handleChange = ({ value, name }) => {
  // ////setValues({ [name]: value }); // this.setState(newState) - возвращает только ->{...newState }
  // ////поєтому
  //   setValues(prevValues => ({ ...prevValues, [name]: value }));
  // };
  // 3 const handleSubmit = e => {
  // e.preventDefault();
  // onSubmit(values);
  // setValues(INITIAL_FORM_VALUES);
  // };
  // 3 // const [values, setValues] = useState(INITIAL_FORM_VALUES);
  // 3 render - value={values.name}
  // onChange = { handleChange };

  // handleChange = ({ value, name }) => {
  //   this.setState({ [name]: value }); // this.setState(newState) - { ...prevState, ...newState }
  // };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, surname, description });
    // setName('');
    // setSurname('');
    // setDescription('');
    onClearForm();
  };
  const onClearForm = () => {
    setName('');
    setSurname('');
    setDescription('');
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state);
  //   this.setState({
  //     name: '',
  //     surname: '',
  //     description: '',
  //   });
  // };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="name" labelName="Name" value={name} onChange={setName} />
      <Input
        name="surname"
        labelName="Surname"
        value={surname}
        onChange={setSurname}
      />
      <Input
        type="textarea"
        name="description"
        labelName="Description"
        value={description}
        onChange={setDescription}
      />
      <Button type="submit" name="Добавить преподавателя" />
    </form>
  );
}

export { Form };
