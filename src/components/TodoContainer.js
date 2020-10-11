import React from "react"
class ToDoContainer extends React.Component {

    //states, array of objects
    //defined todos in the state object
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                copmleted: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };
//acccessed toodos in the render method
//looped through the array of objects, and output each title
    render() {
        return (
            <div>
                {this.state.todos.map(todo => (
                    <li>{todo.title}</li>
                ))}
            </div>
        )
    }
}

export default ToDoContainer