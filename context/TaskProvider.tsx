import React, { createContext, useState } from 'react';
import { createTask, deleteTaskById, getTasks } from '../services/task';

export const TaskContext = createContext(null);

export const TaskProvider = ({ children }: any) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const fetchedTasks = await getTasks();
    setTasks(fetchedTasks);
  };

  const refreshTasks = async () => {
    await fetchTasks();
  };

  const addTask = async (title: string, description: string) => {
    await createTask({ title, description });
    await fetchTasks();
  };

  const deleteTask = async (id: string) => {
    await deleteTaskById(id);
    await fetchTasks();
  };

  const getTaskById = (id: string) => tasks.find((task:any) => task?._id === id);

  return (
    <TaskContext.Provider
      value={{ tasks, fetchTasks, refreshTasks, addTask, deleteTask, getTaskById } as any}
    >
      {children}
    </TaskContext.Provider>
  );
};
