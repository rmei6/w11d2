import * as Util from "../util/todo_api_util";
import { receiveErrors, clearErrors } from "./error_actions";

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = (todos) => {
    return {
      type: RECEIVE_TODOS,
      todos
    };
};

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo
    }
};

export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        todo
    }
};

export const fetchTodos = () => {
    return (dispatch) => {
        return Util.fetchTodos()
            .then(todos => {
                dispatch(receiveTodos(todos));
            })
    }
}

export const createTodo = (todo) => {
    return (dispatch) => {
        return Util.createTodo(todo)
            .then(
                todo => {
                    dispatch(receiveTodo(todo));
                    dispatch(clearErrors());
                },
                err => dispatch(receiveErrors(err.responseJSON))
            )
    }
}