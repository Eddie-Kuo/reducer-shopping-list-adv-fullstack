export const initialState = () => {
  return {
    // shoppingList: [
    //   { id: '1', item: 'apples' },
    //   { id: '2', item: 'bananas' },
    // ],
    itemBody: '',
    shoppingList: [],
    loadingMode: 'at-rest',
    loadingError: null,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'shopping-item-body-changed':
      return {
        ...state,
        itemBody: action.itemBody,
      };
    case 'shopping-list-load-start':
      return {
        ...state,
        loadingMode: 'loading',
      };
    case 'shopping-list-load-error':
      return {
        ...state,
        loadingMode: 'error',
        loadingError: action.error,
      };
    case 'shopping-list-load-success':
      return {
        ...state,
        shoppingList: action.shoppingList,
        loadingMode: 'success',
      };
    default:
      console.error(
        `Action type not supported ${action.type}`,
        action
      );
      return state;
  }
};
