import { Button, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { TaskContext } from '../../context/TaskProvider';

const TaskDetailsScreen = () => {
  const { getTaskById, deleteTask } = useContext(TaskContext);
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const task = getTaskById(id as string);

  const handleDelete = async () => {
    await deleteTask(id as string);
    router.push('/');
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Title: {task?.title}</Text>
      <Text>Description: {task?.description}</Text>
      <Button title="Edit Task" onPress={() => router.push(`/tasks/edit-task/${id}`)} />
      <Button title="Delete Task" onPress={handleDelete} />
    </View>
  );
};

export default TaskDetailsScreen;
