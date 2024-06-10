import React, { Component } from 'react';
import { Button, TextField } from '@mui/material';

class AddTodo extends Component {
  state = {
    content: '',
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({
      content: this.state.content,
    });
    this.setState({
      content: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Add new todo"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={this.handleChange}
            value={this.state.content}
            data-testid="new-item-textfield"
          />
          <Button data-testid="new-item-button" variant="contained" color="primary" type="submit">
            Add Todo
          </Button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
