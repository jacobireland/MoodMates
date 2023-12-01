import React from 'react';
import { Text, View, } from 'react-native';
import styles from '../style';

const NavBar = () => {
	return (
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

)}

export default NavBar;