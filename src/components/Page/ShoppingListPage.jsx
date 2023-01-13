import { Context } from '../../ShoppingListProvider';
import ShoppingList from '../ShoppingList/ShoppingList';
import { useContext, useEffect } from 'react';

import { createShoppingListItem, 
  updateShoppingItem } from '../../services/shopping-list-items.js';
import { handleDoneItem, 
  shoppingItemBodyChanged, 
} from '../../actions/shopping-list-actions.js';
import ShoppingListForm from '../ShoppingList/ShoppingListForm';
import { getItemsEffect } from '../../effects/shopping-list-effects';
import DeleteButton from '../DeleteButton';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  // main page for managing the state of the other components
  useEffect(() => {
    getItemsEffect(dispatch);
  }, []);

  const handleDone = async (itemId, done) => {
    const items = await updateShoppingItem(itemId, done);
    dispatch(handleDoneItem(items));
    getItemsEffect(dispatch);
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
      />}
    <DeleteButton />
    
  </>;
}
