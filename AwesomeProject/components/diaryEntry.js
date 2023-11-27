import React, { useState } from 'react';
import { View, Text, Modal, TextInput, Button, StyleSheet } from 'react-native';
import styles from '../style';

const DiaryEntry = ({ visible, onClose, onSave }) => {
	const [text, setText] = useState('Today I feel...');

	const handleSave = () => {
	onSave(text);
	setText(text);
	onClose();
	};

	React.useEffect(() => {
		if (visible) {
		  inputRef.current.focus();
		}
	}, [visible]);

	const inputRef = React.useRef();

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
						multiline
						ref={inputRef}
					/>
					<View style={styles.buttonContainer}>
						<Button title="Cancel" color={'black'} onPress={onClose} />
						<Button title="Save Entry" color={'black'} onPress={handleSave} />
					</View>
				</View>
			</View>
		</Modal>
  );
};

export default DiaryEntry;
