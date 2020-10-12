import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid"
import axios from 'axios'


class ToDoContainer extends React.Component {

    //states, array of objects
    //defined todos in the state object
    state = {
        todos: [
           
        ],
        show: false
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
            }),
            show: !this.state.show,
        })
    };

    delTodo = id => {
        axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
        .then(response => 
        this.setState({
            //for each of the todos data we are looping through
            //we want to retain the ones whos id is not equal to the id passed in
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                    
                }),
            ],
        })
        )
    };

    addTotoItem = title => {
        axios.post("https://jsonplaceholder.typicode.com/todos", {
            title: title,
            completed: false,
        })
        
        .then(response => 
        this.setState({
            todos: [...this.state.todos, response.data],
        }) )
    };

    //fetching from api during mountiing cycle
    componentDidMount() {
        //.get accepts url of endpoint and an optional config object
        axios.get("https://jsonplaceholder.typicode.com/todos", {
        //param method sets a query string
        params: {
            _limit: 10
        }
    })
     //set state, react knows the toods have changed from empty to api data       
        .then(response => this.setState({ todos: response.data}));
    }

    render() {
        return (
            //now have the state data in todos prop
            <div className="container">
                <Header headerSpan={this.state.show}/>
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