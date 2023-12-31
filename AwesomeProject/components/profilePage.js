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
import RecentLogs from './recentLogs';
import Backendless from 'backendless';
import CustomText from './customText';


Backendless.initApp('9876ED6D-2CDD-4E20-FFF1-E18BFE7CC800', 'AA654184-A2EF-478D-877D-C1B9B6BE4759');


const ProfilePage = ({screenChoose}) => {

	const [happiness, setHappiness] = React.useState('#FFD3B6')

	const [energy, setEnergy] = React.useState(0.75)

	const [anxiety, setAnxiety] = React.useState(anxiety7)

	const onError = error => {
		console.error('Server reported an error: ', error.message)
		console.error('error code: ', error.code)
		console.error('http status: ', error.status)
	}

	const anxietyPicker = (value) => {
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

	const setUserMood = (userMood) => {
		setHappiness(`${ userMood.userHappiness }`)
		setEnergy(parseFloat(`${ userMood.userEnergy }`))
		anxietyPicker(`${ userMood.userAnxiety }`)
	}

	Backendless.Data.of('UserMood').findLast()
		.then(setUserMood)
		.catch(onError)

	const [screen, setScreen] = React.useState("ProfilePage")

	const screenPicker = (src) => {
		setScreen(src)
	}

	if (screen == "ProfilePage") {

		return (

			<View style={styles.mainContainer}>
				<View style={styles.headingContainer}>
					<TouchableOpacity onPress={() => {screenChoose('MoodPage')}} style={styles.arrowContainer}>
						<Image
						style={styles.backArrow}
						source={backArrow}/>
					</TouchableOpacity>
					<CustomText style={styles.name}>Andrea</CustomText>
					<Image
					style={styles.settingsIcon}
					source={settingsIcon}/>
				</View>

				<View style={styles.moodContainer}>
					<MoodIcon size={85} happiness={happiness} energy={energy} anxiety={anxiety}/>
					<CustomText style={styles.moodText}>Your Current Mood</CustomText>
				</View>

				<TouchableOpacity style={styles.friendsButton}>
					<CustomText style={styles.friendsText}>Find Friends</CustomText>
				</TouchableOpacity>

				<View style={styles.statsContainer}>
					<View style={styles.friendsStat}>
						<CustomText style={styles.fStatsText}>9</CustomText>
						<CustomText style={styles.fStatsText}>Friends</CustomText>
					</View>
					<View style={styles.groupsStat}>
						<CustomText style={styles.fStatsText}>3</CustomText>
						<CustomText style={styles.fStatsText}>Groups</CustomText>
					</View>
				</View>

				<View style={styles.trendsContainer}>
					<CustomText style={styles.trendsText}>Your Mood Trends</CustomText>
					<View style={styles.intervals}>
						<CustomText style={styles.thisTexts}>This Week</CustomText>
						<View style={styles.weekContainer}>
							<MoodIcon style={styles.moods} size={70} happiness={'#CFEDC0'} energy={.9} anxiety={anxiety7}/>
						</View>
					</View>
					<View style={styles.intervals}>
						<CustomText style={styles.thisTexts}>This Month</CustomText>
						<View style={styles.monthContainer}>
							<MoodIcon style={styles.moods} size={70} happiness={'#FFD3B6'} energy={1} anxiety={anxiety2}/>
						</View>
					</View>
					<View style={styles.intervals}>
						<CustomText style={styles.thisTexts}>This Year</CustomText>
						<View style={styles.yearContainer}>
							<MoodIcon style={styles.moods} size={70} happiness={'#FFEBB5'} energy={1} anxiety={anxiety5}/>
						</View>
					</View>
				</View>

				<TouchableOpacity onPress={() => {screenPicker('RecentLogs')}} style={styles.logsContainer}>
					<CustomText style={styles.logsText}>View Recent Logs</CustomText>
				</TouchableOpacity>


			</View>

		)}

		else {
			return <RecentLogs
					screenPicker={screenPicker}/>
		}

}

export default ProfilePage;