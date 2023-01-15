import { createContext, useReducer } from 'react';
import { reducerLogger } from './components/reducers/reducer-logger';
import { initialState, reducer } 
  from './components/reducers/shopping-list-reducer';

export const Context = createContext({
  state: initialState(),
  reducer,
});

export const ShoppingListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerLogger(reducer), initialState());
  const contextObject = { state, dispatch };
  return <Context.Provider value={contextObject} >
    {children}
  </Context.Provider>;
};
//git update
