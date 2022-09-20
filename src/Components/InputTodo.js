import React, { Component } from 'react'

class InputTodo extends Component {
  state = {
    title: "",
  };
  onchangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({
      title: "",
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text"
        placeholder='Add To Do...'
        value={this.state.title}
        name="title"
        onChange={this.onchangeHandler}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default InputTodo;
