import React, {useState} from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, Modal } from 'react-native';
import styles from './activityRsvpPopupStyles';
import { BlurView } from 'expo-blur';
import DateTimePicker from '@react-native-community/datetimepicker';
import closeIcon from '../assets/closeIcon.png';
import MoodIcon from './moodIcon';
import anxiety8 from '../assets/anxiety9.png'

const ActivityRsvpPopup = ({ visible, onClose }) => {

	//variable 'time' stores the time the user selects
	// use time.toLocaleTimeString() to convert it to readable string
	const [time, setTime] = useState(new Date());

	const onChange = (event, selectedTime) => {
		if (event.type === 'set') {
		// User selected a date
		setTime(selectedTime);
		}
	};

	//stores user input for activity
	const [activity, setActivity] = useState('')

	//stores user input for location
	const [location, setLocation] = useState('')

	//stores user input for notes
	const [notes, setNotes] = useState('')

	const [date, setDate] = useState('Today')

	//activates when x-icon is pressed
	function sendProposal() {

	}

	const changeDate = () => {

		if (date == 'Today') {
			setDate('Tomorrow')
		}
		else {
			setDate('Today')
		}
	}

	return (
		<Modal
		style={styles.proposalModal}
		animationType="slide"
		transparent={true}
		visible={visible}
		onRequestClose={onClose}
		>
			<BlurView intensity={10} style={styles.mainContainer}>
				<View style={styles.proPopupContainer}>
					<View style={styles.popupContent}>
						<View style={styles.headerContainer}>
							<Text style={styles.header}>Movie Night</Text>
							<TouchableOpacity onPress={onClose}
							style={styles.closeContainer}>
								<Image
								style={styles.closeIcon}
								source={closeIcon}
								/>
							</TouchableOpacity>
						</View>
						<View style={styles.contentContainer}>
							<View style={styles.firstRowContainer}>
								<View style={styles.timeDateContainer}>
									<View style={styles.timeDateBox}>
										<Text style={styles.text}>Time:</Text>
										<Text style={styles.text}>10:00pm</Text>
									</View>
									<View style={styles.timeDateBox}>
										<Text style={styles.text}>Date:</Text>
										<Text style={styles.text}>Today</Text>
									</View>
								</View>
								<View style={styles.proposedByContainer}>
									<Text style={styles.text}>Proposed By:</Text>
									<MoodIcon style={styles.proposerMood}
									size={80} happiness='#FF8B94' energy={0.8} anxiety={anxiety8}/>
								</View>
							</View>
							<View style={styles.containers}>
								<Text style={styles.text}>Time</Text>
								<View style={styles.timetextView}>
									<DateTimePicker style={styles.dateTime}
									mode="time" value={time}
									onChange={onChange} />
									<TouchableOpacity 
									onPress={changeDate}
									style={styles.dateContainer}>
										<Text style={styles.text}>{date}</Text>
									</TouchableOpacity>
								</View>
							</View>
							<View style={styles.containers}>
								<Text style={styles.text}>Location</Text>
								<View style={styles.loctextView}>
									<TextInput 
									onChangeText={(value) => setLocation(value)}
									value={location}
									style={styles.input}/>
								</View>
							</View>
							<View style={styles.notesContainer}>
								<Text style={styles.text}>Notes</Text>
								<View style={styles.notestextView}>
									<TextInput 
									onChangeText={(value) => setNotes(value)}
									value={notes}
									multiline style={styles.notesInput} />
								</View>
							</View>
							<View style={styles.sendContainer}>
								<TouchableOpacity onPress={onClose}
								style={styles.sendProposal}>
									<Text style={styles.sendText}>Send Proposal</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>

			</BlurView>

		</Modal>

)}

export default ActivityRsvpPopup;