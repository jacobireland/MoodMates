import React, {useState} from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './proposalPopupStyles';
import { BlurView } from 'expo-blur';
import DateTimePicker from '@react-native-community/datetimepicker';

const ProposalPopup = () => {

	//variable 'time' stores the time the user selects
	// use time.toLocaleTimeString() to convert it to readable string
	const [time, setTime] = useState(new Date());

	const onChange = (event, selectedTime) => {
		if (event.type === 'set') {
		// User selected a date
		setTime(selectedTime);
		}
	};		

	return (
		<BlurView intensity={10} style={styles.mainContainer}>
			<View style={styles.proPopupContainer}>
				<View style={styles.popupContent}>
					<Text style={styles.header}>Propose Activity</Text>
					<View style={styles.containers}>
						<Text style={styles.text}>Activity</Text>
						<View style={styles.textView}>
							<TextInput style={styles.input}/>
						</View>
					</View>
					<View style={styles.containers}>
						<Text style={styles.text}>Time</Text>
						<View style={styles.timetextView}>
							<DateTimePicker style={styles.dateTime}
							mode="time" value={time}
							onChange={onChange} />
						</View>
					</View>
					<View style={styles.containers}>
						<Text style={styles.text}>Location</Text>
						<View style={styles.loctextView}>
							<TextInput style={styles.input}/>
						</View>
					</View>
					<View style={styles.notesContainer}>
						<Text style={styles.text}>Notes</Text>
						<View style={styles.notestextView}>
							<TextInput multiline style={styles.notesInput} />
						</View>
					</View>
					<View style={styles.sendProposal}>
						<Text>Send Proposal</Text>
					</View>
				</View>
			</View>

		</BlurView>

)}

export default ProposalPopup;