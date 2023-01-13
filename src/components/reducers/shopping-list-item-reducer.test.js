import {
  handleDoneItem,
  shoppingItemBodyChanged,
} from '../../actions/shopping-list-actions';
import { reducer, initialState } from './shopping-list-reducer';

describe('shopping-list-item-reducer', () => {
  test('adding items', () => {
    const oldState = {
      ...initialState(),
    };
    const newState = reducer(
      oldState,
      shoppingItemBodyChanged('almonds')
    );
    expect(newState.itemBody).toEqual('almonds');
  });
  test('marking items as done', () => {
    const oldState = {
      ...initialState(),
    };
    const newState = reducer(oldState, handleDoneItem(10, true));
    expect(newState.done).toEqual(true);
  });
});
