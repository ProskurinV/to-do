import React from 'react';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';
import { Title } from './Title/Title';

export const App = () => {
  return (
    <div>
      <Title title="To Do List" />
      <TaskForm />
      <TaskList />
    </div>
  );
};
