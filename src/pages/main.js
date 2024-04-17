import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Main() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const navigation = useNavigation();

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, { id: Date.now(), title: task, completed: false }]);
      setTask('');
    }
  };

  const handleRemoveTask = (id) => {
    const filteredTaskList = taskList.filter(task => task.id !== id);
    setTaskList(filteredTaskList);
  };

  const handleDetailsTask = (id) => {
    navigation.navigate('details', { taskId: id })
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={[styles.taskText, item.completed && styles.completedTask]}>{item.title}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleDetailsTask(item.id)} style={[styles.button, styles.detailsButton]}>
          <Text style={styles.buttonText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRemoveTask(item.id)} style={[styles.button, styles.deleteButton]}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new task"
          value={task}
          onChangeText={text => setTask(text)}
          onSubmitEditing={handleAddTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.taskList}
        data={taskList}
        renderItem={renderTaskItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#0d3b66',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskList: {
    flex: 1,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  taskText: {
    fontSize: 18,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#f95738',
    marginLeft: 5, // Adiciona margem à esquerda para espaçamento
  },
  detailsButton: {
    backgroundColor: '#0d3b66',
  },
});