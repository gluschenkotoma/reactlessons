import React from 'react';
import { Section } from './components/Section';
import { Header } from './components/Header/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header size="h1" title="Lerned React" />
        <Section />;
      </div>
    );
  }
}

export default App;
