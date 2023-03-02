import { createSlice } from '@reduxjs/toolkit';

const tasksInitialState = {
  tasksList: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask(state, action) {
      state.tasksList.push({
        ...action.payload,
        id: state.tasksList.length + 1,
      });
    },

    deleteTask(state, action) {
      const index = state.tasksList.findIndex(
        task => task.id === action.payload
      );
      state.tasksList.splice(index, 1);
    },

    toggleTask(state, action) {
      state.tasksList = state.tasksList.map(task => {
        if (task.id !== action.payload) {
          return task;
        } else {
          return { ...task, status: !task.status };
        }
      });
    },
  },
});

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
