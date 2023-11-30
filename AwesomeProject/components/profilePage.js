import React, {useState} from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Modal, Switch } from 'react-native';
import styles from './profilePageStyles';
import { BlurView } from 'expo-blur';
import DateTimePicker from '@react-native-community/datetimepicker';
import closeIcon from '../assets/closeIcon.png';
import MoodIcon from './moodIcon';
import anxiety0 from '../assets/anxiety1.png';
import anxiety1 from '../assets/anxiety2.png';
import anxiety2 from '../assets/anxiety3.png';
import anxiety3 from '../assets/anxiety4.png';
import anxiety4 from '../assets/anxiety5.png';
import anxiety5 from '../assets/anxiety6.png';
import anxiety6 from '../assets/anxiety7.png';
import anxiety7 from '../assets/anxiety8.png';
import anxiety8 from '../assets/anxiety9.png';
import backArrow from '../assets/backArrow.png';
import settingsIcon from '../assets/settingsIcon.png';

const ProfilePage = () => {

	return (
		<View style={styles.mainContainer}>
			<View style={styles.headingContainer}>
				<Image
				style={styles.backArrow}
				source={backArrow}/>
				<Text style={styles.name}>Andrea</Text>
				<Image
				style={styles.settingsIcon}
				source={settingsIcon}/>

			</View>


		</View>

)}

export default ProfilePage;