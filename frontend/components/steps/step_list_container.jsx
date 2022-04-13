import { receiveStep } from "../../actions/step_actions"
import { stepsByTodoId } from "../../reducers/selectors"
import {connect} from "react-redux";
import StepList from "./step_list";

const mapDispatchToProps = (dispatch) => {
    return {
        receiveStep: step => dispatch(receiveStep(step))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        steps: stepsByTodoId(state, ownProps.todo_id),
        todo_id: ownProps.todo_id
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepList);