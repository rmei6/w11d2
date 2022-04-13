import { allTodos } from "../../reducers/selectors"
import { connect } from "react-redux"
import TodoList from "./todo_list"
import { receiveTodo } from "../../actions/todo_actions"

const mapStateToProps = (state) => {
    return {todos : allTodos(state)}
}

const mapDispatchToProps = (dispatch) =>{
    return {receiveTodo: todo => {
                dispatch(receiveTodo(todo))},
            removeTodo: todo => {
                dispatch(removeTodo(todo))
            }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
