import React, {useState} from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, Modal } from 'react-native';
import styles from './proposalPopupStyles';
import { BlurView } from 'expo-blur';
import DateTimePicker from '@react-native-community/datetimepicker';
import closeIcon from '../assets/closeIcon.png';
import CustomText from './customText';
import CustomTextInput from './customTextInput';
 

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

	//activates when send button is pressed
	const sendProposal = () => {

		proposedActivity(activity, date, time, location, notes)
		onClose()
		setActivity('')
		setTime(new Date())
		setLocation('')
		setNotes('')
		console.log('proposal sent')
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
							<CustomText style={styles.header}>Propose Activity</CustomText>
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
								<CustomText style={styles.text}>Activity</CustomText>
								<View style={styles.textView}>
									<TextInput 
									onChangeText={(value) => setActivity(value)}
									value={activity}
									style={styles.input}
									returnKeyType={'done'} />
								</View>
							</View>
							<View style={styles.containers}>
								<CustomText style={styles.text}>Time</CustomText>
								<View style={styles.timetextView}>
									<DateTimePicker style={styles.dateTime}
									mode="time" value={time}
									onChange={onChange} />
									<TouchableOpacity 
									onPress={changeDate}
									style={styles.dateContainer}>
										<CustomText style={styles.text}>{date}</CustomText>
									</TouchableOpacity>
								</View>
							</View>
							<View style={styles.containers}>
								<CustomText style={styles.text}>Location</CustomText>
								<View style={styles.loctextView}>
									<TextInput 
									onChangeText={(value) => setLocation(value)}
									value={location}
									style={styles.input}
									returnKeyType={'done'} />
								</View>
							</View>
							<View style={styles.notesContainer}>
								<CustomText style={styles.text}>Notes</CustomText>
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
									<CustomText style={styles.sendText}>Send Proposal</CustomText>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>

			</BlurView>

		</Modal>

)}

export default ProposalPopup;