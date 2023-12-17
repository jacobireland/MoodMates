import React, {useState} from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, SectionList } from 'react-native';
import styles from './profilePageStyles';
import backArrow from '../assets/backArrow.png';
import Backendless from 'backendless';
import CustomText from './customText';

Backendless.initApp('9876ED6D-2CDD-4E20-FFF1-E18BFE7CC800', 'AA654184-A2EF-478D-877D-C1B9B6BE4759');

const RecentLogs = ({screenPicker}) => {

	const [userEntry, setUserEntry] = React.useState('')

	const [userDate, setUserDate] = React.useState('')

	const onError = error => {
		console.error('Server reported an error: ', error.message)
		console.error('error code: ', error.code)
		console.error('http status: ', error.status)
	}

	const setUserDiary = (userDiary) => {
		setUserEntry(`${ userDiary.text }`)
		setUserDate(`${ userDiary.dateMade }`)
	}

	Backendless.Data.of('DiaryEntries').findLast()
		.then(setUserDiary)
		.catch(onError)

	const entries = [
		{
			date: 'Today',
			time: userDate,
			entry: userEntry,
		},
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
			<CustomText style={styles.dateTimeText} >{`${item.time}`}</CustomText>
			<View style={styles.entryContainer}>
				<CustomText style={{ color: '#1F2532'}}>{item.entry}</CustomText>
			</View>
		</View>
	);
	
	const renderSectionHeader = ({ section }) => (
		<CustomText style={styles.sectionTitle}>{section.title}</CustomText>
	);



	return (
		<View>
			<View style={styles.headingLogsContainer}>
				<TouchableOpacity onPress={() => {screenPicker('ProfilePage')}} style={styles.arrowContainer}>
					<Image
					style={styles.backArrow}
					source={backArrow}/>
				</TouchableOpacity>
				<CustomText style={styles.recentLogs}>Recent Logs</CustomText>
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