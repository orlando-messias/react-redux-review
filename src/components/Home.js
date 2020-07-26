import React, { Component } from 'react';
import Table from './Table';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions';
import FilterName from './FilterName';
import FilterValues from './FilterValues';
import OrderColumns from '../OrderColumns';

export class Home extends Component {

  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets();
    console.log(fetchPlanets())
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching) return <h3>Loading...</h3>
    return (
      <div>
        <h3>Strawars DataTable</h3>
        <FilterName />
        <FilterValues />
        <OrderColumns />
        <Table />
      </div>
    )
  }
}

const mapState = (state) => ({
  isFetching: state.getPlanets.isFetching,
})

const mapDispatch = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapState, mapDispatch)(Home);

