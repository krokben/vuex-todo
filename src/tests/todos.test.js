import { expect } from 'chai';
import { mutations } from '../store/modules/todos';
import { ADD_TODO, COMPLETE_TODO } from '../store/types';

describe('mutations', () => {
  it('ADD_TODO', () => {
    const state = [{ id: 1, name: 'First Todo', completed: false }];
    const todo = {id: 2, name: 'Second Todo', completed: false};
    mutations[ADD_TODO](state, todo);
    expect(state).to.deep.include(todo);
    expect(state).to.have.lengthOf(2);
  });
  it('COMPLETE_TODO', () => {
    const state = [{ id: 1, name: 'First Todo', completed: false }];
    const id = 1;
    mutations[COMPLETE_TODO](state, id);
    expect(state.find(todo => todo.id === id).completed).to.be.true;
  });
});
