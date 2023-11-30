import React, {useState} from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, SectionList } from 'react-native';
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
import settingsIcon from '../assets/settingsIcon.png';
import backArrow from '../assets/backArrow.png';



const RecentLogs = () => {

	const entries = [
		{
			date: 'Yesterday',
			time: '8:00 AM',
			entry: `Feeling a bit anxious about the upcoming exams. Taking short breaks to manage stress.`,
		},
		{
			date: 'Yesterday',
			time: '2:30 PM',
			entry: `Attended a stressful group project meeting. The team is facing challenges in coordinating tasks and meeting deadlines. It's causing some tension, but I'm trying to contribute ideas and find solutions to improve our collaboration.`,
		},
		{
			date: 'December 15',
			time: '7:00 PM',
			entry: `Enjoyed a relaxing evening with friends. Grateful for moments that provide a break.`,
		},
		{
			date: 'December 13',
			time: '3:45 PM',
			entry: `Feeling energetic after a good workout session at the gym. Exercise is proving to be a great stress reliever, and it helps me stay focused throughout the day. Planning to incorporate regular workouts into my routine to maintain a positive energy level.`,
		},
		{
			date: 'December 13',
			time: '10:15 AM',
			entry: `Productive study session. Managed to complete a significant portion of the coursework.`,
		},
		{
			date: 'December 12',
			time: '4:45 PM',
			entry: `Anxious about the upcoming job interview. Preparing thoroughly and focusing on strengths.`,
		},
		// Add more entries as needed
	];

	const groupedEntries = entries.reduce((acc, entry) => {
		const date = entry.date;
		if (!acc[date]) {
		acc[date] = [];
		}
		acc[date].push(entry);
		return acc;
	}, {});
	
	// Convert groupedEntries into an array of sections
	const sections = Object.keys(groupedEntries).map(date => ({
		title: date,
		data: groupedEntries[date],
	}));
	
	const renderItem = ({ item }) => (
		<View>
			<Text style={styles.dateTimeText} >{`${item.time}`}</Text>
			<View style={styles.entryContainer}>
				<Text>{item.entry}</Text>
			</View>
		</View>
	);
	
	const renderSectionHeader = ({ section }) => (
		<Text style={styles.sectionTitle}>{section.title}</Text>
	);



	return (
		<View>
			<View style={styles.headingLogsContainer}>
				<TouchableOpacity style={styles.arrowContainer}>
					<Image
					style={styles.backArrow}
					source={backArrow}/>
				</TouchableOpacity>
				<Text style={styles.recentLogs}>Recent Logs</Text>
			</View>

			<SectionList
			style= {styles.sectionListContainer}
			sections={sections}
			renderItem={renderItem}
			renderSectionHeader={renderSectionHeader}
			keyExtractor={(item) => item.time} // Use a unique key for each item
			/>
			
		</View>
	);
};

export default RecentLogs;