import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from "../actions/step_actions"
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
  
  const stepsReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState;
      switch (action.type) {
      case RECEIVE_STEPS:
          nextState = {};
          action.steps.forEach((step) => {
            nextState[step.id] = step;
          })
          return nextState;
      case RECEIVE_STEP:
          nextState = Object.assign({}, state);
          nextState[action.step.id] = action.step;
          return nextState;
      case REMOVE_STEP:
          nextState = Object.assign({}, state);
          delete nextState[action.step.id];
          return nextState;
        default:
          return state;
      }
  };
    
  export default stepsReducer;