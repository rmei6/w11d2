import { connect } from "react-redux"
import { receiveSteps } from "../../actions/step_actions"
import TodoDetailView from "./todo_detail_view"

const mapDispatchToProps = (dispatch) => {
    return {
        removeToDo: todo => dispatch(removeToDo(todo)),
        receiveSteps: steps => dispatch(receiveSteps(steps))
    }
}

export default connect(null, mapDispatchToProps)(TodoDetailView)