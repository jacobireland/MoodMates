import React, {useState} from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, Modal } from 'react-native';
import styles from './proposalPopupStyles';
import { BlurView } from 'expo-blur';
import DateTimePicker from '@react-native-community/datetimepicker';
import closeIcon from '../assets/closeIcon.png';
 

const ProposalPopup = ({ visible, onClose, proposedActivity }) => {

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
	const sendProposal = () => {

		proposedActivity(activity, date, time, location, notes)
		onClose()
		setActivity('')
		setTime(new Date())
		setLocation('')
		setNotes('')
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
							<Text style={styles.header}>Propose Activity</Text>
							<TouchableOpacity onPress={onClose}
							style={styles.closeContainer}>
								<Image
								style={styles.closeIcon}
								source={closeIcon}
								/>
							</TouchableOpacity>
						</View>
						<View style={styles.contentContainer}>
							<View style={styles.containers}>
								<Text style={styles.text}>Activity</Text>
								<View style={styles.textView}>
									<TextInput 
									onChangeText={(value) => setActivity(value)}
									value={activity}
									style={styles.input}
									returnKeyType={'done'} />
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
									style={styles.input}
									returnKeyType={'done'} />
								</View>
							</View>
							<View style={styles.notesContainer}>
								<Text style={styles.text}>Notes</Text>
								<View style={styles.notestextView}>
									<TextInput 
									onChangeText={(value) => setNotes(value)}
									value={notes}
									multiline style={styles.notesInput}
									returnKeyType={'done'}
									blurOnSubmit={true}  />
								</View>
							</View>
							<View style={styles.sendContainer}>
								<TouchableOpacity onPress={sendProposal}
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

export default ProposalPopup;