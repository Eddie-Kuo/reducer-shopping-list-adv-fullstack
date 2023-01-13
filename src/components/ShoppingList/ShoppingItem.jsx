
export default function ShoppingItem({ item, handleDone }) {
  return (
    <>
      <input type="checkbox" checked={item.done} onChange={() => {
        handleDone(!item.done);
      }}/>
      {item.item}
    </>
  );
}

