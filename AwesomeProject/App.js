import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import styles from './style';
import profileIcon from './assets/profileIcon.png';
import Mood from './components/mood';

const App = () => {

 	const [number, onChangeNumber] = React.useState('');

	return (
	<View style={styles.container}>
		<View style={styles.appContent}>

			<View style={styles.greeting}>

				<View style={styles.greetingProfile}>
					<Text style={styles.greetingText}>Good Morning,</Text>
					<Image
					style={styles.profileIcon}
					source={profileIcon}
					/>
				
				</View>
				<Text style={styles.greetingName}>Andrea!</Text>
			</View>

			<View style={styles.feelingToday}>

				<Text style={styles.feelingQuestion}>How are you feeling today?</Text>

				<Mood/>
				
			</View>

			<TextInput
				style={styles.diaryEntry}
				onChangeText={onChangeNumber}
				value={number}
				placeholder="useless placeholder"
			/>


		</View>

		<View style={styles.navBar}>
			<View style={styles.navButtonContainer}>
				<Text style={styles.buttonText}>Mood</Text>
			</View>
			<View style={styles.separator}></View>

			<View style={styles.navButtonContainer}>
				<Text style={styles.buttonText}>Groups</Text>
			</View>
			<View style={styles.separator}></View>

			<View style={styles.navButtonContainer}>
				<Text style={styles.buttonText}>Activities</Text>
			</View>
			<View style={styles.separator}></View>

		</View>
	</View>
		
)}

export default App;