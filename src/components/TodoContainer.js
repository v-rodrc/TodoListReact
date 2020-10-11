import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"

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
            //now have the state data in todos prop
            <div>
                <Header></Header>
                <TodosList todos={this.state.todos}/>
            </div>
        )
    }
}

export default ToDoContainer