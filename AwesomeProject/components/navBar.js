import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import styles from '../style';

const NavBar = ({screenChoose}) => {

	const screenButton = (scr) => {
		screenChoose(scr)
	}

	return (
		<View style={styles.navBar}>
			<TouchableOpacity onPress={() => screenButton('MoodPage')} style={styles.navButtonContainer}>
				<Text style={styles.buttonText}>Mood</Text>
			</TouchableOpacity>
			<View style={styles.separator}></View>

			<TouchableOpacity onPress={() => screenButton('GroupsPage')} style={styles.navButtonContainer}>
				<Text style={styles.buttonText}>Groups</Text>
			</TouchableOpacity>
			<View style={styles.separator}></View>

			<TouchableOpacity onPress={() => screenButton('ActivitiesPage')} style={styles.navButtonContainer}>
				<Text style={styles.buttonText}>Activities</Text>
			</TouchableOpacity>
			<View style={styles.separator}></View>

		</View>

)}

export default NavBar;