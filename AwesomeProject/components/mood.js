import React from 'react';
import { Text, View, Image, } from 'react-native';
import styles from '../style';
import Slider from "react-native-sliders";
import anxiety0 from '../assets/anxiety1.png';
import anxiety1 from '../assets/anxiety2.png';
import anxiety2 from '../assets/anxiety3.png';
import anxiety3 from '../assets/anxiety4.png';
import anxiety4 from '../assets/anxiety5.png';
import anxiety5 from '../assets/anxiety6.png';
import anxiety6 from '../assets/anxiety7.png';
import anxiety7 from '../assets/anxiety8.png';
import anxiety8 from '../assets/anxiety9.png';
import MoodIcon from './moodIcon';

const Mood = () => {

	/*define three variables, and their initial states,
	we call the 'set...' functions to update the states of the variables
	and in turn modify the glowing mood orb*/

	const [anxiety, setAnxiety] = React.useState(anxiety4)

	const [happiness, setHappiness] = React.useState('#FFEBB5')

	const [energy, setEnergy] = React.useState(0.7)


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
	<View>

		<View style={styles.moodIconContainer}>
		
			{/* component used for our 'glowing orb,
			defined in './components/moodIcon.js
			we can use this component for any place in our app that needs to
			show the users glowing orb mood*/}
			<MoodIcon happiness={happiness} energy={energy} anxiety={anxiety}/>
		
		</View>

		<Text style={styles.sliderText}>Happiness</Text>

		{/* as the user moves the slider,
		call the function happinessSetter with the current value of the slider
		to change the glowing orb to match their mood*/}
		<Slider
		onValueChange={value => happinessSetter(value)}
		onSlidingComplete={value => happinessSetter(value)}
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
		onSlidingComplete={value => energySetter(value)}
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

)}

export default Mood;