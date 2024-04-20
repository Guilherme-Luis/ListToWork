import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Details({ route, navigation }) {
  const { task } = route.params;
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);
  const [description, setDescription] = useState(task.description);

  const toggleStatus = () => {
    setStatus(currentStatus => {
      const newStatus = currentStatus === 'pendente' ? 'concluído' : 'pendente';
      task.status = newStatus;
      return newStatus; 
    });
  };

  const saveChanges = () => {
    task.title = title;
    task.status = status;
    task.description = description;
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={text => setTitle(text)}
      />

      <Text style={styles.label}>Status da Tarefa</Text>
      <TouchableOpacity
        style={[styles.statusButton, {backgroundColor: status === 'pendente' ? '#0d3b66' : '#f95738'}, {borderColor: status === 'pendente' ? '#0d3b66' : '#f95738'}]}
        onPress={toggleStatus}
      >
        <Text style={styles.statusButtonText}>{status === 'pendente' ? 'Concluído' : 'Pendente'}</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        multiline
        placeholder="Insira a descrição da tarefa"
        value={description}
        onChangeText={text => setDescription(text)}
      />

      <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf0ca',
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#0d3b66',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  descriptionInput: {
    height: 150,
    textAlignVertical: 'top', 
  },
  statusButton: {
    backgroundColor: '#0d3b66', 
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  statusButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#0d3b66',
    flexDirection: 'center',
    height: 45,
    padding: 13,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});