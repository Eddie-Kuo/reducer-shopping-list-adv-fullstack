export const shoppingListBodyChange = (item) => {
  return {
    item,
    type: 'text-body-changed',
  };
};

export const shoppingListLoadSuccessAction = (shoppingList) => {
  return {
    type: 'shopping-list-load-success',
    shoppingList,
  };
};
