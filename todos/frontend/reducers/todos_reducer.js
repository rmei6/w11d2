import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from "../actions/todo_actions"

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

  //Freeze state so it cannot be mutated
  Object.freeze(state);

  let nextState;
    switch (action.type) {
    //Replace the current todos state with the new todos
    case RECEIVE_TODOS:
        nextState = {};
        //Iterate through todos and add them each to the nextState
        action.todos.forEach((todo) => {
          nextState[todo.id] = todo;
        })
        return nextState;
    //Append the todo to the current state
    case RECEIVE_TODO:
        //Create a shallow copy of the current state
        nextState = Object.assign({}, state);
        nextState[action.todo.id] = action.todo;
        return nextState;
    //Remove the todo to the current state
    case REMOVE_TODO:
        //Create a shallow copy of the current state
        debugger;
        nextState = Object.assign({}, state);
        delete nextState[action.todo.id];
        return nextState;
      default:
        return state;
    }
};
  
export default todosReducer;