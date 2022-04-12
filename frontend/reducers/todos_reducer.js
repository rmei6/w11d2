import {RECEIVE_TODOS, RECEIVE_TODO} from "../actions/todo_actions"

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
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

      default:
        return state;
    }
};
  
export default todosReducer;