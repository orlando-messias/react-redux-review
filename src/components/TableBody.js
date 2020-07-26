import React, { Component } from 'react';
import { connect } from 'react-redux';
import filterFunc from './functions/filterFunc';
import sortFunc from './functions/sortFunc';

class TableBody extends Component {
  render() {
    const { planets, name, numericValues, column, order } = this.props;
    const data = filterFunc(planets, name, numericValues);
    // const filterName = planets.filter((planet) => planet.name.includes(name));
    const orderedPlanets = sortFunc(data, column, order);
    return (
      <tbody>
        {orderedPlanets.map((planet) => (
          <tr key={planet.name}>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>
              {planet.films.map((film) => (
                <span key={film}>{film}</span>
              ))}
            </td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapState = (state) => ({
  planets: state.getPlanets.data,
  name: state.filters.filterByName.name,
  numericValues: state.filters.filterByNumericValues,
  column: state.filters.order.column,
  order: state.filters.order.sort,
});

export default connect(mapState)(TableBody);
