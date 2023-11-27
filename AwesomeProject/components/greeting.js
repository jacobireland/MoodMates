import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import styles from '../style';
import profileIcon from '../assets/profileIcon.png';

const Greeting = () => {

	function greetingSetter() {
		const hours = new Date().getHours()

		if (0 <= hours && hours < 12) {
			return ('Morning,')
		}

		else if (12 <= hours && hours < 5) {
			return ('Afternoon,')
		}

		else {
			return ('Evening,')
		}
	}

	const greetingType = greetingSetter()

	return (

		<View>

			<View style={styles.greeting}>

				<View style={styles.greetingProfile}>
					<Text style={styles.greetingText}>Good </Text>
					<View style={styles.greetingWordContainer}>
						<Text style={styles.greetingWord}>{greetingType}</Text>
					</View>
					<Image
					style={styles.profileIcon}
					source={profileIcon}
					/>
				
				</View>
				<Text style={styles.greetingName}>Andrea!</Text>
			</View>

			<Text style={styles.feelingQuestion}>How are you feeling today?</Text>

		</View>

)}

export default Greeting;