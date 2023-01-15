import ShoppingItem from './ShoppingItem';

export default function ShoppingList({ 
  shoppingList, 
  handleDone,
  handleDelete 
}) {
  return (
    <ol>
      {shoppingList.map(item => {
        return <li key={item.id}>
          <ShoppingItem item={item} handleDone={(done) => {
            handleDone(item.id, done);
          }}
          handleDelete={handleDelete}
          />
        </li>;
      })}
    </ol>
  );
}
