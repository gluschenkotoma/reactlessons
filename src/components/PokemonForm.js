import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
// import{ReactComponent as MyIcon} from "./"   - для своих иконок
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const styles = { form: { marginBottom: 20 } };

class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  // обновление при каждом вводе в инпут
  handleNameChange = e => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      // toast.error('Введите имя покемона!');
      toast.error('🦄 Введите имя покемона!');
      return;
    }
    //   передача стейта с формы в App -<PokemonForm onSubmit={this.handleFormSubmit} /> - handleFormSubmit
    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </form>
    );
  }
}
export default PokemonForm;
