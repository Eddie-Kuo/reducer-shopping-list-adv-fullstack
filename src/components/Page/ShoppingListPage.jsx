import { Context } from '../../ShoppingListProvider';
import ShoppingList from '../ShoppingList/ShoppingList';
import { useContext, useEffect } from 'react';

import { createShoppingListItem, 
  deleteShoppingItem, 
  updateShoppingItem } from '../../services/shopping-list-items.js';
import { deleteShoppingItemAction, handleDoneItem, 
  shoppingItemBodyChanged, 
} from '../../actions/shopping-list-actions.js';
import ShoppingListForm from '../ShoppingList/ShoppingListForm';
import { getItemsEffect } from '../../effects/shopping-list-effects';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  // main page for managing the state of the other components
  useEffect(() => {
    getItemsEffect(dispatch);
  }, []);

  const handleDone = async (itemId, done) => {
    await updateShoppingItem(itemId, done);
    dispatch(handleDoneItem(itemId, done));
  };

  const handleDelete = async (itemId) => {
    await deleteShoppingItem(itemId);
    dispatch(deleteShoppingItemAction(itemId));
  };


  return <>
    <h1>My Shopping List</h1>
    <ShoppingListForm 
      item={state.itemBody}
      onBodyChange={(item) => {
        dispatch(shoppingItemBodyChanged(item));
      }}
      onSubmit={async (item) => {
        await createShoppingListItem(item);
        getItemsEffect(dispatch);
        dispatch(shoppingItemBodyChanged(''));
      }} />
    {state.loadingMode === 'loading' ? 
      <span>Loading...</span> : 
      <ShoppingList 
        shoppingList={state.shoppingList} 
        handleDone={(itemId, done) => {
          handleDone(itemId, done);
        }}
        handleDelete={(itemId) => {
          handleDelete(itemId);
        }}
      />}
  
  </>;
}
