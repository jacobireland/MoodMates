import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../style';
import profileIcon from '../assets/profileIcon.png';
import CustomText from './customText';

const Greeting = ({screenChoose}) => {

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
					<CustomText style={styles.greetingText}>Good </CustomText>
					<View style={styles.greetingWordContainer}>
						<CustomText style={styles.greetingWord}>{greetingType}</CustomText>
					</View>
					<TouchableOpacity onPress={() => screenChoose('ProfilePage')} style={styles.profileIconContainer}>
						<Image
						style={styles.profileIcon}
						source={profileIcon}
						/>
					</TouchableOpacity>
				
				</View>
				<CustomText style={styles.greetingName}>Andrea!</CustomText>
			</View>

			<CustomText style={styles.feelingQuestion}>How are you feeling today?</CustomText>

		</View>

)}

export default Greeting;