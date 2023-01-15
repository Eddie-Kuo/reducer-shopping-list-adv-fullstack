
export default function ShoppingListForm({ item, onBodyChange, onSubmit }) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(item);
    }} >
      <textarea value={item} onChange={(e) => {
        onBodyChange(e.target.value);
      }} />
      <button type="submit">Submit</button>
    </form>
  );
}
