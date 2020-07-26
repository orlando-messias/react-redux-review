import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUES, SORT_COLUMNS } from '../actions';

const INITIAL_STATE = {
  filterByName: { name: ''},
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  }
}

const filters = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.name }
      };
    case FILTER_BY_NUMERIC_VALUES:
      console.log(action.column)
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, {
          column: action.column,
          comparison: action.comparison,
          value: action.value,
        }]
      }
    case SORT_COLUMNS:
      return {
        ...state,
        order: {
          column: action.value.column,
          sort: action.value.order,
        }
      }
    default:
      return state;
  }
}

export default filters;