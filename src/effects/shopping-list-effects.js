import {
  shoppingListLoadErrorAction,
  shoppingListLoadStartAction,
  shoppingListLoadSuccessAction,
} from '../actions/shopping-list-actions.js';
import { getShoppingListItems } from '../services/shopping-list-items';

export const getItemsEffect = async (dispatch) => {
  dispatch(shoppingListLoadStartAction());
  try {
    const items = await getShoppingListItems();
    dispatch(shoppingListLoadSuccessAction(items));
    // console.log('item', items);
  } catch (error) {
    dispatch(shoppingListLoadErrorAction(error));
  }
};
