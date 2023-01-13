import { deleteShoppingItems, getShoppingListItems } from '../services/shopping-list-items';


const deleteCompletedItems = async () => {
  const items = await getShoppingListItems();
  const doneItems = items.filter((item) => item.done === true);
  console.log('marked items:', doneItems);
  await deleteShoppingItems(doneItems.id);
};

export default function DeleteButton() {
  return (
    <button type="button" onClick={deleteCompletedItems}>Delete</button>
  );
}
