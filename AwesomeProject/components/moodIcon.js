import React from 'react';
import { View, Image } from 'react-native';
import styles from '../style';

const MoodIcon = ({ size, happiness, energy, anxiety }) => {

	const iconSize = size || 110; // Default size is 110 if not provided

	const anxietySize = iconSize-(iconSize/10)

	const energySize = iconSize * 0.736
	
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
		<View style={[styles.moodIcon, { width: iconSize, height: iconSize, borderRadius: iconSize/2 }]}>
			
			<View style={[styles.energyLevel, happinessColor, { width: energySize, height: energySize, borderRadius: energySize/2 }]}></View>
			
			<Image
			style={[styles.anxietyLevel, anxietyColor, { width: anxietySize, height: anxietySize, borderRadius: anxietySize/2 }]}
			source={anxiety}
			/>
		</View>

)}

export default MoodIcon;

