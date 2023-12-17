import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import styles from '../style';
import CustomText from './customText';

const NavBar = ({screenChoose}) => {

	const screenButton = (scr) => {
		screenChoose(scr)
	}

	return (
		<View style={styles.navBar}>
			<TouchableOpacity onPress={() => screenButton('MoodPage')} style={styles.navButtonContainer}>
				<CustomText style={styles.buttonText}>Mood</CustomText>
			</TouchableOpacity>
			<View style={styles.separator}></View>

			<TouchableOpacity onPress={() => screenButton('GroupsPage')} style={styles.navButtonContainer}>
				<CustomText style={styles.buttonText}>Groups</CustomText>
			</TouchableOpacity>
			<View style={styles.separator}></View>

			<TouchableOpacity onPress={() => screenButton('ActivitiesPage')} style={styles.navButtonContainer}>
				<CustomText style={styles.buttonText}>Activities</CustomText>
			</TouchableOpacity>
			<View style={styles.separator}></View>

		</View>

)}

export default NavBar;