import { allErrors, allTodos } from "../../reducers/selectors"
import { connect } from "react-redux"
import TodoList from "./todo_list"
import { receiveTodo, createTodo, removeTodo, updateTodo, deleteTodo } from "../../actions/todo_actions"
import { clearErrors } from "../../actions/error_actions"

const mapStateToProps = (state) => {
    return {
        todos : allTodos(state),
        errors : allErrors(state)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {receiveTodo: todo => {
                dispatch(receiveTodo(todo))
            },
            removeTodo: todo => {
                dispatch(removeTodo(todo))
            },
            createTodo: todo => {
                dispatch(createTodo(todo))
            },
            updateTodo: todo => {
                dispatch(updateTodo(todo))
            },
            deleteTodo: todo => {
                dispatch(deleteTodo(todo))
            }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
