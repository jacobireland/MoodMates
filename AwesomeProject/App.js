import React from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import Mood from './components/mood';
import NavBar from './components/navBar';
import Greeting from './components/greeting';
import DiaryEntry from './components/diaryEntry';
import MoodPage from './components/moodPage';


/** This is the backbone code for our app.
	The NavBar will be on every page.
	We can code each page as its own component (look at MoodPage for example), 
	and then use functions to call that component/page based on buttons pressed in the app.
	When a certain page needs to be shown, it will be placed in the
	appContent element (like how MoodPage is right now) and that will
	make it visible to users */


const App = () => {

	return (
	
		<View style={styles.container}>
			<View style={styles.appContent}>

				{/* The component for the Mood page of the app,
				defined in /components/moodPage.js */}
				<MoodPage/>

			</View>
		
		{/* Component for our nav bar,
		defined in /components/navBar.js */}
		<NavBar/>
		
	</View>
		
)}

export default App;