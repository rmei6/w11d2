import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from "../actions/todo_actions"

const initialState = {
  1: { // this is the step with id = 1
    id: 1,
    title: 'walk to store',
    done: false,
    todo_id: 1
  },
  2: { // this is the step with id = 2
    id: 2,
    title: 'buy soap',
    done: false,
    todo_id: 1
  }
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;
    switch (action.type) {
    case RECEIVE_TODOS:
        nextState = {};
        action.todos.forEach((todo) => {
          nextState[todo.id] = todo;
        })
        return nextState;
    case RECEIVE_TODO:
        nextState = Object.assign({}, state);
        nextState[action.todo.id] = action.todo;
        return nextState;
    case REMOVE_TODO:
        nextState = Object.assign({}, state);
        delete nextState[action.todo.id];
        return nextState;
      default:
        return state;
    }
};
  
export default todosReducer;