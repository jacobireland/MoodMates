import React, {useState} from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import styles from './activityRsvpPopupStyles';
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
										<Text style={styles.textTime}>Time:</Text>
										<Text style={styles.text}>10:00pm</Text>
									</View>
									<View style={styles.timeDateBox}>
										<Text style={styles.textDate}>Date:</Text>
										<Text style={styles.text}>Today</Text>
									</View>
								</View>
								<View style={styles.proposedByContainer}>
									<Text style={styles.text}>Proposed By:</Text>
									<View style={styles.moodContainer}>
										<MoodIcon size={65} happiness='#FF8B94' energy={0.8} anxiety={anxiety8}/>
									</View>
									<Text style={styles.text}>Olivia</Text>
								</View>
							</View>
							<View style={styles.locationContainer}>
								<Text style={styles.textLocation}>Location:</Text>
								<Text style={styles.text}>Hogan 2A</Text>
							</View>
							<View style={styles.attendeesContainer}>
								<Text style={styles.text}>Whose Going:</Text>
								<ScrollView horizontal style={styles.attendeesBox}>
									<View style={styles.attendees}>
										<MoodIcon size={65} happiness='#FF8B94' energy={0.8} anxiety={anxiety8}/>
										<Text style={styles.text}>Justin</Text>
									</View>
									<View style={styles.attendees}>
										<MoodIcon size={65} happiness='#FF8B94' energy={0.8} anxiety={anxiety8}/>
										<Text style={styles.text}>Anish</Text>
									</View>
									<View style={styles.attendees}>
										<MoodIcon size={65} happiness='#FF8B94' energy={0.8} anxiety={anxiety8}/>
										<Text style={styles.text}>Ben</Text>
									</View>
									<View style={styles.attendees}>
										<MoodIcon size={65} happiness='#FF8B94' energy={0.8} anxiety={anxiety8}/>
										<Text style={styles.text}>Andrea</Text>
									</View>
								</ScrollView>
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