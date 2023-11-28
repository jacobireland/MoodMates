import React, { useState } from 'react';
import { View, Text, Modal, TextInput, Button, StyleSheet } from 'react-native';
import styles from '../style';
import { BlurView } from 'expo-blur';

const DiaryEntry = ({ visible, onClose, onSave }) => {
	const [text, setText] = useState('');

	const handleSave = () => {
	onSave(determineText(text));
	setText(text);
	onClose();
	};

	function determineText(userText) {
		if (userText == "" || /^[ ]*$/.test(userText)) {
			return "Today I'm feeling..."
		}
		else {
			return userText
		}
	}

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
			<BlurView intensity={10} style={styles.modalContainer}>
				<View style={styles.modalContent}>
					<View>
						<TextInput
							style={styles.textInput}
							onChangeText={(value) => setText(value)}
							value={text}
							multiline
							ref={inputRef}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<Button title="Cancel" color={'black'} onPress={onClose} />
						<Button title="Save Entry" color={'black'} onPress={handleSave} />
					</View>
				</View>
			</BlurView>
		</Modal>
  );
};

export default DiaryEntry;
