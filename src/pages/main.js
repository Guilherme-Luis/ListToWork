import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Main() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const navigation = useNavigation();

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, { id: Date.now(), title: task, status: '', description: '', completed: false }]);
      setTask('');
    } else {
      Alert.alert('Campo vazio', 'Por favor, insira uma nova tarefa.');
    }
  };

  const handleRemoveTask = (id) => {
    const filteredTaskList = taskList.filter(task => task.id !== id);
    setTaskList(filteredTaskList);
  };

  const navigateToDetails = (task) => {
    navigation.navigate('details', { task });
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={[styles.taskText]}>{item.title}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigateToDetails(item)} style={[styles.button, styles.detailsButton]}>
          <Text style={styles.buttonText}>Detalhes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRemoveTask(item.id)} style={[styles.button, styles.deleteButton]}>
          <Text style={styles.buttonText}>Apagar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar nova tarefa"
          value={task}
          onChangeText={text => setTask(text)}
          onSubmitEditing={handleAddTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Adicionar</Text>
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
    backgroundColor: '#faf0ca',
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
    borderColor: '#0d3b66',
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
    borderWidth: 2,
    padding: 3,
    borderColor: '#0d3b66',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  taskText: {
    padding: 5,
    fontSize: 18,
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
    marginLeft: 5,
  },
  detailsButton: {
    backgroundColor: '#0d3b66',
  },
});