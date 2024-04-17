import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Details({ route, navigation }) {
  const { taskId } = route.params;
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');

  const saveChanges = () => {
    // Implemente aqui a lógica para salvar as alterações na tarefa
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Titulo</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={taskId.title}
        onChangeText={text => setTitle(text)}
      />

      <Text style={styles.label}>Status da Tarefa</Text>
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={status}
        onChangeText={text => setStatus(text)}
      />

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
    backgroundColor: '#fff',
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  descriptionInput: {
    height: 150,
    textAlignVertical: 'top', // Permite que o texto seja alinhado ao topo
  },
  saveButton: {
    backgroundColor: '#0d3b66',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});