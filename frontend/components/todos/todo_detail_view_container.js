import { connect } from "react-redux"
import TodoDetailView from "./todo_detail_view"

const mapDispatchToProps = (dispatch) => {
    return {
        removeToDo: todo => dispatch(removeToDo(todo))
    }
}

export default connect(null, mapDispatchToProps)(TodoDetailView)