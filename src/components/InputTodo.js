import React, { Component } from 'react'

class InputTodo extends Component {
//make a controlled component and make controlled by compoonent state rather than the DOM
state = {
    title: ""
};

//type anything in the input field, event handler will trigger
//then calls onChange() class method and will rerender the state using setState method to the title 
onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
};

handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
        title: ""
    });
};

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                placeholder="Add todo..."
                value={this.state.title}
                name="title"
                onChange={this.onChange}
                />
                <input type="submit" value="Submit"
            />
            </form>
        )
    }
}

export default InputTodo
