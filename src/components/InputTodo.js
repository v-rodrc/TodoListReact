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
        title: e.target.value
    });
};

    render() {
        return (
            <form>
                <input type="text" 
                placeholder="Add todo..."
                value={this.state.title}
                onChange={this.onChange}
                />
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default InputTodo
