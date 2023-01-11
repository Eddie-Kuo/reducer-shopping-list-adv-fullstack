import ShoppingItem from './ShoppingItem';

export default function ShoppingList({ shoppingList }) {
  return (
    <ol>
      {shoppingList.map(item => {
        return <li key={item.id}><ShoppingItem item={item}/></li>;
      })}
    </ol>
  );
}
