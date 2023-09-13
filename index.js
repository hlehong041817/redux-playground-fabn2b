import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';
import './style.css';

import Chart from './Chart';

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INC':
      return { count: state.count + 1 };
    case 'DEC':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: (state.count = 0) };
    default:
      return state;
  }
};

const reducers = combineReducers({
  counter: countReducer,
});

const actions = {
  inc: () => ({ type: 'INC' }),
  dec: () => ({ type: 'DEC' }),
  reset: () => ({ type: 'RESET' }),
};

const store = createStore(reducers);

class App extends Component {
  render() {
    console.log(this.props, actions);
    return (
      <div>
        <Chart />
        <button onClick={this.props.inc}>Increment</button>
        <button onClick={this.props.dec}>Decrement</button>
        <button onClick={this.props.reset}>Reset</button>
        <div>Value: {this.props.count}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ counter }) => {
  return { count: counter.count };
};

const AppContainer = connect(mapStateToProps, actions)(App);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
