
export default function ShoppingItem({ 
  item, 
  handleDone, 
  handleDelete 
}) {
  return (
    <>
      <input type="checkbox" checked={item.done} onChange={() => {
        handleDone(!item.done);
      }}/>
      {item.item}
      <button onClick={() => handleDelete(item.id)} 
        type="button">Delete</button>
    </>
  );
}
