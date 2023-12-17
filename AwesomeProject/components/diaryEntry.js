import React, { useState } from 'react';
import { View, Text, Modal, TextInput, Button, StyleSheet } from 'react-native';
import styles from '../style';
import { BlurView } from 'expo-blur';
import Backendless from 'backendless';
import CustomText from './customText';

Backendless.initApp('9876ED6D-2CDD-4E20-FFF1-E18BFE7CC800', 'AA654184-A2EF-478D-877D-C1B9B6BE4759');

const DiaryEntry = ({ visible, onClose, onSave }) => {
	const [text, setText] = useState('');

	const saveToBackend = async () => {

		try {
			// Assuming you have a 'TextInputData' table in Backendless with a 'text' column
			const dataObject = {
				text: text,
				dateMade: (new Date()).toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric'}),
			};
		
			const savedObject = await Backendless.Data.of('DiaryEntries').save(dataObject);
			console.log('Saved to Backendless:', savedObject);
		
		} catch (error) {
			console.error('Error saving to Backendless:', error);
		}
	};

	const handleSave = () => {
	saveToBackend();
	onSave(determineText(text));
	setText('');
	onClose();
	};

	function determineText(userText) {
		if (userText == "" || /^[ ]*$/.test(userText)) {
			return "Today I'm feeling..."
		}
		else {
			return "Today I'm feeling..."
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
