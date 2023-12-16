import React from 'react';
import { Text, View, Image, } from 'react-native';
import styles from '../style';
import Slider from "react-native-sliders";
import anxiety0 from '../assets/Anxiety1.png';
import anxiety1 from '../assets/Anxiety2.png';
import anxiety2 from '../assets/Anxiety3.png';
import anxiety3 from '../assets/Anxiety4.png';
import anxiety4 from '../assets/Anxiety5.png';
import anxiety5 from '../assets/Anxiety6.png';
import anxiety6 from '../assets/Anxiety7.png';
import anxiety7 from '../assets/Anxiety8.png';
import anxiety8 from '../assets/Anxiety9.png';
import MoodIcon from './moodIcon';
import Backendless from 'backendless';

Backendless.initApp('9876ED6D-2CDD-4E20-FFF1-E18BFE7CC800', 'AA654184-A2EF-478D-877D-C1B9B6BE4759');

const Mood = () => {

	/*define three variables, and their initial states,
	we call the 'set...' functions to update the states of the variables
	and in turn modify the glowing mood orb*/

	const [anxiety, setAnxiety] = React.useState(anxiety4)

	const [anxietyNum, setAnxietyNum] = React.useState(4)

	const [happiness, setHappiness] = React.useState('#FFEBB5')

	const [energy, setEnergy] = React.useState(0.7)

	/*
	const [happinessSlider, setHappinessSlider] = React.useState(4)

	const [energySlider, setEnergySlider] = React.useState(4)

	const onError = error => {
		console.error('Server reported an error: ', error.message)
		console.error('error code: ', error.code)
		console.error('http status: ', error.status)
	}
	
	const setUserMood = (userMood) => {
		happinessSliderPicker(`${ userMood.userHappiness }`)
		setEnergy(parseFloat(`${ userMood.userEnergy }`))
		anxietyPicker(`${ userMood.userAnxiety }`)
	}
	React.useEffect(() => {
		// Your function or code here will run only on component mount
		Backendless.Data.of('UserMood').findLast()
			.then(setUserMood)
			.catch(onError)
	  }, []);
	  */

	//save user mood to backend

	const saveToBackend = async () => {
		console.log(anxietyNum)

		try {
			const dataObject = {
				userHappiness: happiness,
				userEnergy: energy,
				userAnxiety: anxietyNum,
			};
		
			const savedObject = await Backendless.Data.of('UserMood').save(dataObject);
			console.log('Saved to Backendless:', savedObject);
		
		} catch (error) {
			console.error('Error saving to Backendless:', error);
		}
	};

	/*
	function happinessSliderPicker(value) {

		setHappiness(value)

		if (value == '#FF7480') {
			setHappinessSlider(0)
		}
		if (value == '#FF8B94') {
			setHappinessSlider(1)
		}
		if (value == '#FFAAA5') {
			setHappinessSlider(2)
		}
		if (value == '#FFD3B6') {
			setHappinessSlider(3)
		}
		if (value == '#FFEBB5') {
			setHappinessSlider(4)
		}
		if (value == '#DCECD1') {
			setHappinessSlider(5)
		}
		if (value == '#CFEDC0') {
			setHappinessSlider(6)
		}
		if (value == '#BDE6A8') {
			setHappinessSlider(7)
		}
		if (value == '#97E384') {
			setHappinessSlider(8)
		}
	}
	*/

	//takes the value of the happiness slider and sets the HEX color
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

	}

	//takes the value of the energy slider and sets the energy value
	function energySetter(value) {
		if (value == 0) {
			setEnergy(0.4)
		}
		if (value == 1) {
			setEnergy(0.48)
		}
		if (value == 2) {
			setEnergy(0.56)
		}
		if (value == 3) {
			setEnergy(0.64)
		}
		if (value == 4) {
			setEnergy(0.70)
		}
		if (value == 5) {
			setEnergy(0.78)
		}
		if (value == 6) {
			setEnergy(0.84)
		}
		if (value == 7) {
			setEnergy(0.90)
		}
		if (value == 8) {
			setEnergy(1.0)
		}

	}

	//takes the value of the anxiety slider and sets the image for anxiety squiggles
	function anxietySetter(value) {

		setAnxietyNum(0)

		if (value == 0) {
			setAnxietyNum(0)
			setAnxiety(anxiety0)
		}
		if (value == 1) {
			setAnxietyNum(1)
			setAnxiety(anxiety1)
		}
		if (value == 2) {
			setAnxietyNum(2)
			setAnxiety(anxiety2)
		}
		if (value == 3) {
			setAnxietyNum(3)
			setAnxiety(anxiety3)
		}
		if (value == 4) {
			setAnxietyNum(4)
			setAnxiety(anxiety4)
		}
		if (value == 5) {
			setAnxietyNum(5)
			setAnxiety(anxiety5)
		}
		if (value == 6) {
			setAnxietyNum(6)
			setAnxiety(anxiety6)
		}
		if (value == 7) {
			setAnxietyNum(7)
			setAnxiety(anxiety7)
		}
		if (value == 8) {
			setAnxietyNum(8)
			setAnxiety(anxiety8)
		}

	}

	return (
	<View>

		<View style={styles.moodIconContainer}>
		
			{/* component used for our 'glowing orb,
			defined in './components/moodIcon.js
			we can use this component for any place in our app that needs to
			show the users glowing orb mood*/}
			<MoodIcon size={110} happiness={happiness} energy={energy} anxiety={anxiety}/>
		
		</View>

		<Text style={styles.sliderText}>Happiness</Text>

		{/* as the user moves the slider,
		call the function happinessSetter with the current value of the slider
		to change the glowing orb to match their mood*/}
		<Slider
		onValueChange={value => happinessSetter(value)}
		onSlidingComplete={() => {saveToBackend()}}
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

		<Slider
		onValueChange={value => energySetter(value)}
		onSlidingComplete={() => {saveToBackend()}}
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

		<Text style={styles.sliderText}>Anxiety</Text>
		<Slider
		value = {4}
		onValueChange={value => anxietySetter(value)}
		onSlidingComplete={() => {saveToBackend()}}
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

)}

export default Mood;