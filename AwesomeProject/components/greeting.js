import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import styles from '../style';
import profileIcon from '../assets/profileIcon.png';

const Greeting = () => {

	return (

		<View>

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

			<Text style={styles.feelingQuestion}>How are you feeling today?</Text>

		</View>

)}

export default Greeting;