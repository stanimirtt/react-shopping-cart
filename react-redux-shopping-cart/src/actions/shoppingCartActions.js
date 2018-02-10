import * as types from './actionTypes';
import itemApi from '../api/mockItemApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export const loadItemsSuccess = items => ({ type: types.LOAD_ITEMS_SUCCESS, items });

export const updateQuantitySuccess = item => ({ type: types.UPDATE_QUANTITY_SUCCESS, item });

export const removeItemSuccess = id => ({ type: types.REMOVE_ITEM_SUCCESS, id });

export const loadItems = () => dispatch => {
  dispatch(beginAjaxCall());

  return itemApi
    .getAllItems()
    .then(items => {
      dispatch(loadItemsSuccess(items));
    })
    .catch(error => {
      throw error;
    });
};

export const updateQuantity = item => dispatch => {
  dispatch(beginAjaxCall());

  return itemApi
    .updateQuantity(item)
    .then(i => {
      dispatch(updateQuantitySuccess(i));
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      throw error;
    });
};

export const removeItem = id => dispatch => {
  dispatch(beginAjaxCall());

  return itemApi
    .removeItem(id)
    .then(i => {
      dispatch(removeItemSuccess(i));
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      throw error;
    });
};
