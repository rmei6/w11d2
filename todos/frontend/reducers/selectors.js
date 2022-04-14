export const allTodos = (state) => {
    return Object.values(state.todos);
}

export const stepsByTodoId = (state, todoId) => {
    const steps = [];
    Object.values(state.steps).forEach(step => {
        if(step.todo_id === todoId){
            steps.push(step);
        }
    })
    return steps;
}