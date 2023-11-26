import React from 'react';
import { View, Image } from 'react-native';
import styles from '../style';

const MoodIcon = ({ happiness, energy, anxiety }) => {
	
	const anxietyColor = {
		tintColor: happiness,
		opacity: energy,

	}

	const happinessColor = {
		backgroundColor: happiness,
		shadowColor: happiness,
		opacity: energy,
		shadowOpacity: energy
	}

	return (
		<View style={styles.moodIcon}>
			
			<View style={[styles.energyLevel, happinessColor]}></View>
			
			<Image
			style={[styles.anxietyLevel, anxietyColor]}
			source={anxiety}
			/>
		</View>

)}

export default MoodIcon;

