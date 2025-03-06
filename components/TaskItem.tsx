import { Text, TouchableOpacity } from 'react-native';

import React from 'react';
import { useRouter } from 'expo-router';

const TaskItem = ({ task }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push(`/tasks/task-details/${task._id}`)}
      style={{
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}
    >
      <Text>{task.title}</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
