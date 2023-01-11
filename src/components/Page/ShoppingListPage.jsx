import { Context } from "../../ShoppingListProvider";
import ShoppingList from "../ShoppingList/ShoppingList";
import {useContext} from 'react'

export default function ShoppingListPage() {
  const {state, dispatch} = useContext(Context)
  return <>
    <h1>My Shopping List</h1>
    <ShoppingList shoppingList={state.shoppingList} />
  </>;
}
