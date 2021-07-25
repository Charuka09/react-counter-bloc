import React, { Component } from 'react';

import Counter from './components/Counter';

import CounterBloc from './blocs/CounterBloc';

const bloc = new CounterBloc();

class App extends Component {
  componentWillUnmount() {
    bloc.dispose();
  }

  render() {
    return (
      <div>
        <h1 as="h2">Using BLoC Pattern</h1>
        <Counter bloc={bloc} />
      </div>
    );
  }
}

export default App;