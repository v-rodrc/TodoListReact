import React, { Component } from 'react'
import TodoItem from './TodoItem'

 class TodosList extends Component {
    render() {
        return (
            //access data through props from TodoContainer
            <div>
                {this.props.todos.map(todo => (
                   <TodoItem key={todo.id} 
                   todo={todo}
                   handleChangeProps={this.props.handleChangeProps}/>
                ))}
            </div>
        )
    }
}

export default TodosList
