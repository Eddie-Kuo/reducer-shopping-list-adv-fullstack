export const initialState = () => {
  return {
    // shoppingList: [
    //   { id: '1', item: 'apples' },
    //   { id: '2', item: 'bananas' },
    // ],
    itemBody: '',
    shoppingList: [],
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'shopping-list-load-success':
      return {
        ...state,
        shoppingList: action.shoppingList,
      };
    default:
      return state;
  }
};
