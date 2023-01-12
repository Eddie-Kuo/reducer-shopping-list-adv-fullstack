import { Context } from '../../ShoppingListProvider';
import ShoppingList from '../ShoppingList/ShoppingList';
import { useContext, useEffect } from 'react';

import { createShoppingListItem, getShoppingListItems } from '../../services/shopping-list-items.js';
import { shoppingItemBodyChanged, shoppingListBodyChange } from '../../actions/shopping-list-actions.js';
import ShoppingListForm from '../ShoppingList/ShoppingListForm';
import { getItemsEffect } from '../../effects/shopping-list-effects';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
// main page for managing the state of the other components
  useEffect(() => {
    getItemsEffect(dispatch);
  }, []);

  return <>
    <h1>My Shopping List</h1>
    <ShoppingListForm 
      item={state.itemBody}
      onBodyChange={(item)=> {
        dispatch(shoppingItemBodyChanged(item));
      }}
      onSubmit={async (item) => {
        await createShoppingListItem(item);
        getItemsEffect(dispatch);
        // dispatch(shoppingListBodyChange(''));
      }} />
    {state.loadingMode === 'loading' ? <span>Loading...</span> : <ShoppingList shoppingList={state.shoppingList} />}
    
  </>;
}
