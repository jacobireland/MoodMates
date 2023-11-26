import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import styles from './style';
import profileIcon from './assets/profileIcon.png';
import Slider from "react-native-sliders";

const Sliders = () => <Slider
						minimumValue={0}
						maximumValue={8}
						value={4}
						step={1}
						minimumTrackStyle={{
							height: 8,
							borderRadius: 4,
							backgroundColor: '#8BC7AF',
						}}
						maximumTrackStyle={{
							height: 8,
							borderRadius: 4,
							backgroundColor: '#8BC7AF',
						}}
						thumbStyle={{
							height: 20,
							width: 20,
							borderRadius: 10,
							backgroundColor: '#8BC7AF',
						}}
/>;



const App = () => {

	const [text, onChangeText] = React.useState('Useless Text');
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

				<View style={styles.moodIcon}>


				</View>

				<Text style={styles.sliderText}>Happiness</Text>
				<Sliders/>

				<Text style={styles.sliderText}>Energy</Text>
				<Sliders/>

				<Text style={styles.sliderText}>Anxiety</Text>
				<Sliders/>
				
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