import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './style';
import Mood from './components/mood';
import NavBar from './components/navBar';
import Greeting from './components/greeting';
import DiaryEntry from './components/diaryEntry';

const App = () => {

	const [modalVisible, setModalVisible] = React.useState(false);
	const [enteredText, setEnteredText] = React.useState('Today I feel...');

	const handleSaveText = (text) => {
		setEnteredText(text);}

	return (
	<View style={styles.container}>
		<View style={styles.appContent}>

			{/* Component for our greeting message,
			defined in the greeting.js file in ../components */}
			<Greeting/>

			<View style={styles.feelingToday}>

				{/* Component for our mood icon and sliders,
				defined in the mood.js file in ../components */}
				<Mood/>
				
			</View>


			<View style={styles.diaryBox}>
				<Button
					title={enteredText}
					onPress={() => setModalVisible(true)}
				/>
				<DiaryEntry
					visible={modalVisible}
					onClose={() => setModalVisible(false)}
					onSave={handleSaveText}
				/>
			</View>


		</View>
		
		{/* Component for our nav bar,
		defined in the navBar.js file in ../components */}
		<NavBar/>
		
	</View>
		
)}

export default App;