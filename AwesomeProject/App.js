import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import styles from './style';
import profileIcon from './assets/profileIcon.png';
import Slider from "react-native-sliders";
//import Slider from "@react-native-community/slider";
import anxiety0 from './assets/anxiety1.png';
import anxiety1 from './assets/anxiety2.png';
import anxiety2 from './assets/anxiety3.png';
import anxiety3 from './assets/anxiety4.png';
import anxiety4 from './assets/anxiety5.png';
import anxiety5 from './assets/anxiety6.png';
import anxiety6 from './assets/anxiety7.png';
import anxiety7 from './assets/anxiety8.png';
import anxiety8 from './assets/anxiety9.png';


const App = () => {

 	const [number, onChangeNumber] = React.useState('');

	const [anxiety, setAnxiety] = React.useState(anxiety5)

	const [happiness, setHappiness] = React.useState('#FFEBB5')

	function happinessSetter(value) {
		if (value == 0) {
			setHappiness('#FF7480')
		}
		if (value == 1) {
			setHappiness('#FF8B94')
		}
		if (value == 2) {
			setHappiness('#FFAAA5')
		}
		if (value == 3) {
			setHappiness('#FFD3B6')
		}
		if (value == 4) {
			setHappiness('#FFEBB5')
		}
		if (value == 5) {
			setHappiness('#DCECD1')
		}
		if (value == 6) {
			setHappiness('#CFEDC0')
		}
		if (value == 7) {
			setHappiness('#BDE6A8')
		}
		if (value == 8) {
			setHappiness('#97E384')
		}

		const styles = StyleSheet.create({

		})
	}

	function anxietySetter(value) {
		if (value == 0) {
			setAnxiety(anxiety0)
		}
		if (value == 1) {
			setAnxiety(anxiety1)
		}
		if (value == 2) {
			setAnxiety(anxiety2)
		}
		if (value == 3) {
			setAnxiety(anxiety3)
		}
		if (value == 4) {
			setAnxiety(anxiety4)
		}
		if (value == 5) {
			setAnxiety(anxiety5)
		}
		if (value == 6) {
			setAnxiety(anxiety6)
		}
		if (value == 7) {
			setAnxiety(anxiety7)
		}
		if (value == 8) {
			setAnxiety(anxiety8)
		}
	}

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
					
					<View style={styles.energyLevel}></View>
					
					<Image
					style={styles.anxietyLevel}
					source={anxiety}
					/>


				</View>

				<Text style={styles.sliderText}>Happiness</Text>
				<Slider
				value = {4}
				minimumValue = {0}
				maximumValue = {8}
				step = {1}
				minimumTrackStyle = {{
					height: 8,
					borderRadius: 8,
					backgroundColor: '#C0EDDA'
				}}
				maximumTrackStyle = {{
					height: 8,
					borderRadius: 8,
					backgroundColor: '#C0EDDA'
				}}
				thumbStyle = {{
					width: 25,
					height: 25,
					borderRadius: 25/2,
					backgroundColor: '#C0EDDA'
				}}
				/>

				<Text style={styles.sliderText}>Energy</Text>
				<Slider/>

				<Text style={styles.sliderText}>Anxiety</Text>
				<Slider
				value = {4}
				onValueChange={value => anxietySetter(value)}
				onSlidingComplete={value => anxietySetter(value)}
				minimumValue = {0}
				maximumValue = {8}
				step = {1}
				minimumTrackStyle = {{
					height: 8,
					borderRadius: 8,
					backgroundColor: '#C0EDDA'
				}}
				maximumTrackStyle = {{
					height: 8,
					borderRadius: 8,
					backgroundColor: '#C0EDDA'
				}}
				thumbStyle = {{
					width: 25,
					height: 25,
					borderRadius: 25/2,
					backgroundColor: '#C0EDDA'
				}}
				/>
				
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