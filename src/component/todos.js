import "../component/todos.css";
import React from 'react';
import { Card, CardContent, Grid, ListItemButton, Checkbox } from '@mui/material';

const Todos = ({ todos }) => {
  const handleToggle = (id) => {
    // Update the state of todos to toggle the completed status of the clicked todo
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  };

  const todoList = todos.length ? (
    todos.map(todo => (
      <Grid item xs={12} key={todo.id}>
        <Card>
          <ListItemButton onClick={() => handleToggle(todo.id)}>
            <Checkbox checked={todo.completed} />
            <CardContent>
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.content}
              </span>
            </CardContent>
          </ListItemButton>
        </Card>
      </Grid>
    ))
  ) : (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <p>You have no todos left!</p>
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <Grid container spacing={2}>
      {todoList}
    </Grid>
  );
};

export default Todos;
