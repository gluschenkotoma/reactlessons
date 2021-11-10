import React, { Component } from 'react';
import PokemonForm from './components/PokemonForm';
import { ToastContainer } from 'react-toastify';
import PokemonInfo from './components/Pokemoninfo';

class App extends Component {
  state = {
    pokemonName: '',
  };

  // в параметр "= pokemonName =>" зайдет this.state.pokemonName с this.props.onSubmit(this.state.pokemonName) с handleSubmit покемонформс
  handleFormSubmit = pokemonName => {
    console.log(pokemonName);
    //    при сабмите значения this.state.pokemonName записываем в стейт апп
    this.setState({ pokemonName });
  };
  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
export default App;

// onSubmit - prop, передача пропса, передача аргументов функции,onSubmit={this.handleFormSubmit}
