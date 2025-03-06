import { Button, TextInput, View } from 'react-native';
import React, { useContext, useState } from 'react';

import { TaskContext } from '../../context/TaskProvider';
import { useRouter } from 'expo-router';

const AddTaskScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addTask } = useContext(TaskContext);
  const router = useRouter();

  const handleAddTask = async () => {
    await addTask(title, description);
    router.push('/');
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

export default AddTaskScreen;
