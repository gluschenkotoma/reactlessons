import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../components/Header/Header';

function Home() {
  return (
    <div>
      <Header size="h3" title="App creating list of teachers" />

      <Link to="/teachers">List of teachers</Link>
      <br />
      <Link to="/form">Form of additing teachers</Link>
    </div>
  );
}

export { Home };
