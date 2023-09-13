import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';

import * as d3 from 'd3';

class Chart extends Component {
  componentDidMount(){
    var margin = { top: 20, right: 20, bottom: 50, left: 70 },
    var width = 960 - margin.left - margin.right,
    var height = 500 - margin.top - margin.bottom;
    console.log("toto")
    //d3.render();
  }
  render() {
    console.log(this.props);
    return (
      <div>
       {"chart"}
      </div>
    );
  }
}

const mapStateToProps = ({ counter }) => {
  return {
    count: counter.count,
  };
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
