import { Context } from '../../ShoppingListProvider';
import ShoppingList from '../ShoppingList/ShoppingList';
import { useContext, useEffect } from 'react';

import { createShoppingListItem, getShoppingListItems } from '../../services/shopping-list-items.js';
import { shoppingListBodyChange, shoppingListLoadStartAction, shoppingListLoadSuccessAction } from '../../actions/shopping-list-actions.js';
import ShoppingListForm from '../ShoppingList/ShoppingListForm';
import { getListEffect } from '../../effects/shopping-list-effects';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
// main page for managing the state of the other components
  useEffect(() => {
    (async () => {
      dispatch(shoppingListLoadStartAction());
      const items = await getShoppingListItems();
      console.log('items', items);
      const action = shoppingListLoadSuccessAction(items)
      dispatch(action)
    })();
  }, []);

  const onBodyChange = (item) => {
    dispatch(shoppingListBodyChange(item));
  };

  return <>
    <h1>My Shopping List</h1>
    <ShoppingListForm 
      item={state.itemBody}
      onBodyChange={onBodyChange}
      onSubmit={async (item) => {
        await createShoppingListItem(item);
        getListEffect(dispatch);
        dispatch(shoppingListBodyChange(''));
      }} />
    {state.loadingMode === 'loading' ? <span>Loading...</span> : <ShoppingList shoppingList={state.shoppingList} />}
    
  </>;
}
