import React, { Component } from 'react'

 class TodosList extends Component {
    render() {
        return (
            //access data through props from TodoContainer
            <div>
                {this.props.todos.map(todo => (
                    <li>{todo.title}</li>
                ))}
            </div>
        )
    }
}

export default TodosList
