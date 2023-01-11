import { shoppingListLoadSuccessAction } from '../actions/shopping-list-actions';
import { getShoppingListItems } from '../services/shopping-list-items';

export const getListEffect = async (dispatch) => {
  const items = await getShoppingListItems();
  dispatch(shoppingListLoadSuccessAction(items));
};
