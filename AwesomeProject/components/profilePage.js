import React, {useState} from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Modal, Switch } from 'react-native';
import styles from './profilePageStyles';
import { BlurView } from 'expo-blur';
import DateTimePicker from '@react-native-community/datetimepicker';
import closeIcon from '../assets/closeIcon.png';
import MoodIcon from './moodIcon';
import anxiety0 from '../assets/Anxiety1.png';
import anxiety1 from '../assets/Anxiety2.png';
import anxiety2 from '../assets/Anxiety3.png';
import anxiety3 from '../assets/Anxiety4.png';
import anxiety4 from '../assets/Anxiety5.png';
import anxiety5 from '../assets/Anxiety6.png';
import anxiety6 from '../assets/Anxiety7.png';
import anxiety7 from '../assets/Anxiety8.png';
import anxiety8 from '../assets/Anxiety9.png';
import settingsIcon from '../assets/settingsIcon.png';
import backArrow from '../assets/backArrow.png';

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

			<View style={styles.moodContainer}>
				<MoodIcon size={100} happiness={'#FFD3B6'} energy={.9} anxiety={anxiety7}/>
				<Text style={styles.moodText}>Your Current Mood</Text>
			</View>

			<View style={styles.friendsButton}>
				<Text style={styles.friendsText}>Find Friends</Text>
			</View>

			<View style={styles.statsContainer}>
				<View style={styles.friendsStat}>
					<Text style={styles.fStatsText}>9</Text>
					<Text style={styles.fStatsText}>Friends</Text>
				</View>
				<View style={styles.groupsStat}>
					<Text style={styles.fStatsText}>3</Text>
					<Text style={styles.fStatsText}>Groups</Text>
				</View>
			</View>

			<View style={styles.trendsContainer}>
				<Text style={styles.trendsText}>Your Mood Trends</Text>
				<View style={styles.intervals}>
					<Text style={styles.thisTexts}>This Week</Text>
					<MoodIcon style={styles.moods} size={80} happiness={'#CFEDC0'} energy={.9} anxiety={anxiety7}/>
				</View>
				<View style={styles.intervals}>
					<Text style={styles.thisTexts}>This Month</Text>
					<MoodIcon style={styles.moods} size={80} happiness={'#FFD3B6'} energy={.75} anxiety={anxiety2}/>
				</View>
				<View style={styles.intervals}>
					<Text style={styles.thisTexts}>This Year</Text>
					<MoodIcon style={styles.moods} size={80} happiness={'#FFEBB5'} energy={1} anxiety={anxiety5}/>
				</View>
			</View>


		</View>

)}

export default ProfilePage;