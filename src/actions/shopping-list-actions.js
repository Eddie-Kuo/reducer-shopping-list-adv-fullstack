export const shoppingListLoadSuccessAction = (shoppingList) => {
  return {
    type: 'shopping-list-load-success',
    shoppingList,
  };
};

export const shoppingListLoadStartAction = () => {
  return {
    type: 'shopping-list-load-start',
  };
};

export const shoppingListLoadErrorAction = (error) => {
  return {
    type: 'shopping-list-load-error',
    error,
  };
};

export const shoppingItemBodyChanged = (itemBody) => {
  return {
    type: 'shopping-item-body-changed',
    itemBody,
  };
};

export const handleDoneItem = (itemId, done) => {
  return {
    itemId,
    done,
    type: 'shopping-item-marked-done',
  };
};

export const deleteShoppingItemAction = (itemId) => {
  return {
    itemId,
    type: 'shopping-item-delete',
  };
};
