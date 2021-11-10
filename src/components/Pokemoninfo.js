import { Component } from 'react';
import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from './services/pokemon-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: Status.IDLE,
  };
  // всегда с проверкой что бы не зациклить
  componentDidUpdate(prevProps, prevState) {
    const nextName = this.props.pokemonName;

    if (prevProps.pokemonName !== this.props.pokemonName) {
      //   console.log('Изменилось имя покемона'); //Изменилось имя покемона
      //   console.log('prevProps.pokemonName :', prevProps.pokemonName); //prevProps.pokemonName: dino
      //   console.log('this.props.pokemonName :', this.props.pokemonName); //this.props.pokemonName : nbjhvb

      //перед запросом
      this.setState({ status: Status.PENDING });
      pokemonAPI
        .fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>Введите имя покемона.</div>;
    }

    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      // new Error(`Нет покемона с именем ${nextName}`)
      return <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
