import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid"

class ToDoContainer extends React.Component {

    //states, array of objects
    //defined todos in the state object
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup development environment",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Develop website and add content",
                copmleted: false
            },
            {
                id: uuidv4(),
                title: "Deploy to live server",
                completed: false
            }
        ]
    };
//acccessed toodos in the render method
//looped through the array of objects, and output each title
    handleChange = id => {
        this.setState({
            //loop through todos data and check if any items
            // id matches the checked id, then flip the completed value
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    };

    delTodo = id => {
        this.setState({
            //for each of the todos data we are looping through
            //we want to retain the ones whos id is not equal to the id passed in
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        })
    };

    addTotoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };

    render() {
        return (
            //now have the state data in todos prop
            <div>
                <Header/>
                <InputTodo addTodoProps={this.addTotoItem}/>
                <TodosList 
                todos={this.state.todos}
                handleChangeProps={this.handleChange}
                deleteTodoProps={this.delTodo}
                
                />
                
            </div>
        )
    }
}

export default ToDoContainer