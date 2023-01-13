
export default function ShoppingItem({ item, handleDone }) {
  return (
    <div>
      <input type="checkbox" checked={item.done} onChange={() => {
        handleDone(!item.done);
      }}/>
      {item.item}
    </div>
  );
}
//double click to delete action 
// backup will be a delete button
