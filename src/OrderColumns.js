import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortColumns } from './actions';

const columns = [
  'Name',
  'Climate',
  'Created',
  'Diameter',
  'Edited',
  'Films',
  'Gravity',
  'Orbital_period',
  'Population',
  'Rotation_period',
  'Surface_water',
  'Terrain',
  'URL',
];

export class OrderColumns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'Name',
      order: 'ASC',
    };
  }

  columnSelect() {
    return (
      <select
        onChange={(event) => this.setState({ column: event.target.value })}
      >
        {columns.map((column) => (
          <option key={column} value={column.toLowerCase()}>
            {column}
          </option>
        ))}
      </select>
    );
  }

  sortSelect() {
    return (
      <div>
        <label htmlFor="orderAsc">
          ASC
          <input
            id="orderAsc"
            name="order"
            type="radio"
            value="ASC"
            onChange={(event) => this.setState({ order: event.target.value })}
          />
        </label>
        <label htmlFor="orderDesc">
          DESC
          <input
            id="orderDesc"
            name="order"
            type="radio"
            value="DESC"
            onChange={(event) => this.setState({ order: event.target.value })}
          />
        </label>
      </div>
    )
  }

  sortButton() {
    const { column, order } = this.state;
    const {sortColumns} = this.props;
    return (
      <button
        type="button"
        onClick={() => sortColumns({ column, order })}
      >
        Ordernar
      </button>
    )
  }

  render() {
    return (
      <div>
        {this.columnSelect()}
        {this.sortSelect()}
        {this.sortButton()}
      </div>
    )
  }
}

const mapState = (state) => ({
  column: state.filters.order.column,
  sort: state.filters.order.sort,
})

const mapDispatch = (dispatch) => ({
  sortColumns: (sortValues) => dispatch(sortColumns(sortValues))
})

export default connect(mapState, mapDispatch)(OrderColumns);

