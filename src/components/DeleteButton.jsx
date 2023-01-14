// import { deleteShoppingItem, 
//   getShoppingListItems 
// } from '../services/shopping-list-items';


// const deleteCompletedItems = async () => {
//   const items = await getShoppingListItems();
//   const doneItems = items.filter((item) => item.done === true);
//   console.log('doneitems', doneItems);
//   const itemsIdArray = doneItems.map((item) => {
//     return item.id;
//   });
//   console.log('itemsIDArray', itemsIdArray);
//   const ids = itemsIdArray.join();
//   console.log('marked items:', ids);
//   await deleteShoppingItem();
// };

// export default function DeleteButton() {
//   return (
//     <button type="button" onClick={deleteCompletedItems}>Delete</button>
//   );
// }
