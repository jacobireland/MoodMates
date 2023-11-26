import React, { useState } from 'react';
import { View, Text, Modal, TextInput, Button, StyleSheet } from 'react-native';
import styles from '../style';

const DiaryEntry = ({ visible, onClose, onSave }) => {
  const [text, setText] = useState('');

  const handleSave = () => {
    onSave(text);
    setText('');
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.textInput}
            onChangeText={(value) => setText(value)}
            value={text}
          />
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={onClose} />
            <Button title="Save" onPress={handleSave} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DiaryEntry;
