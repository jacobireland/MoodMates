import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../style';
import profileIcon from '../assets/profileIcon.png';
import { useTheme } from './themeContext';

const Greeting = ({screenChoose}) => {

	const { theme } = useTheme();

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
					<Text style={[styles.greetingText, { color: theme.textColor }]}>Good </Text>
					<View style={styles.greetingWordContainer}>
						<Text style={[styles.greetingWord, , { color: theme.textColor }]}>{greetingType}</Text>
					</View>
					<TouchableOpacity onPress={() => screenChoose('ProfilePage')} style={styles.profileIconContainer}>
						<Image
						style={[styles.profileIcon, { tintColor: theme.textColor }]}
						source={profileIcon}
						/>
					</TouchableOpacity>
				
				</View>
				<Text style={[styles.greetingName, , { color: theme.textColor }]}>Andrea!</Text>
			</View>

			<Text style={[styles.feelingQuestion, , { color: theme.textColor }]}>How are you feeling today?</Text>

		</View>

)}

export default Greeting;