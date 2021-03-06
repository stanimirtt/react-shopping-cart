import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.items, action) => {
  switch (action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      return action.items;

    case types.UPDATE_QUANTITY_SUCCESS:
      return [...state.map(item => (item.id === action.item.id ? action.item : item))];

    case types.REMOVE_ITEM_SUCCESS:
      return [...state.filter(item => item.id !== action.id)];

    default:
      return state;
  }
};
