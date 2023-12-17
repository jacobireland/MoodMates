import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../style';
import Mood from './mood';
import NavBar from './navBar';
import Greeting from './greeting';
import DiaryEntry from './diaryEntry';
import CustomText from './customText';

const MoodPage = ({screenChoose}) => {

	const [modalVisible, setModalVisible] = React.useState(false);
	const [enteredText, setEnteredText] = React.useState("Today I'm feeling...");

	const handleSaveText = (text) => {
		setEnteredText(text);}

	return (

		<View>
			{/* Component for our greeting message,
			defined in the greeting.js file in ../components */}
			<Greeting screenChoose={screenChoose}/>

			<View style={styles.feelingToday}>

				{/* Component for our mood icon and sliders,
				defined in the mood.js file in ../components */}
				<Mood/>
				
			</View>

			{/* The diary entry box,
			uses a component that allows for the popup text input area defined
			as DiaryEntry in /components/diaryEntry.js */}
			<View style={styles.diaryBox}>
				<TouchableOpacity style={styles.diaryOpen}
				onPress={() => setModalVisible(true)}>
					<CustomText
						style={styles.diaryText}
					>{enteredText}
					</CustomText>
				</TouchableOpacity>
				<DiaryEntry
					visible={modalVisible}
					onClose={() => setModalVisible(false)}
					onSave={handleSaveText}
				/>
			</View>
		</View>

		
)}

export default MoodPage;