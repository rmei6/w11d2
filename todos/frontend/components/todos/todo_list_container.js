import { allTodos } from "../../reducers/selectors"
import { connect } from "react-redux"
import TodoList from "./todo_list"
import { receiveTodo } from "../../actions/todo_actions"
// import { createTodo } from "../../util/todo_api_util"
import { createTodo } from "../../actions/todo_actions"

const mapStateToProps = (state) => {
    return {todos : allTodos(state)}
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
            }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
