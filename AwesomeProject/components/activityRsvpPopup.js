import React, {useState} from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Modal, Switch } from 'react-native';
import styles from './activityRsvpPopupStyles';
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
import RSVPSwitch from '../assets/RSVPSwitch.png';
import CustomText from './customText';

const ActivityRsvpPopup = ({ visible, onClose, rsvpData }) => {

	const [switchEnabled, setSwitchEnabled] = useState(false)	;

	const [toggleEnabled, setToggleEnabled] = useState(true);

	const handleSwitchToggle = () => {
		setSwitchEnabled(!switchEnabled);
		rsvpData(toggleEnabled);
	};

	const handleToggleEnable = () => {
		setToggleEnabled(!toggleEnabled)
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
							<CustomText style={styles.header}>Movie Night</CustomText>
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
										<CustomText style={styles.textTime}>Time:</CustomText>
										<CustomText style={styles.text}>10:00pm</CustomText>
									</View>
									<View style={styles.timeDateBox}>
										<CustomText style={styles.textDate}>Date:</CustomText>
										<CustomText style={styles.text}>Today</CustomText>
									</View>
								</View>
								<View style={styles.proposedByContainer}>
									<CustomText style={styles.text}>Proposed By:</CustomText>
									<View style={styles.moodContainer}>
										<MoodIcon size={65} happiness='#FF8B94' energy={0.8} anxiety={anxiety8}/>
									</View>
									<CustomText style={styles.text}>Olivia</CustomText>
								</View>
							</View>
							<View style={styles.locationContainer}>
								<CustomText style={styles.textLocation}>Location:</CustomText>
								<CustomText style={styles.text}>Hogan 2A</CustomText>
							</View>
							<View style={styles.attendeesContainer}>
								<CustomText style={styles.text}>Whose Going:</CustomText>
								<ScrollView horizontal style={styles.attendeesBox}>
									<View style={styles.attendees}>
										<MoodIcon size={65} happiness='#FFEBB5' energy={0.8} anxiety={anxiety5}/>
										<CustomText style={styles.text}>Justin</CustomText>
									</View>
									<View style={styles.attendees}>
										<MoodIcon size={65} happiness='#97E384' energy={1} anxiety={anxiety2}/>
										<CustomText style={styles.text}>Anish</CustomText>
									</View>
									<View style={styles.attendees}>
										<MoodIcon size={65} happiness='#FFAAA5' energy={0.65} anxiety={anxiety6}/>
										<CustomText style={styles.text}>Ben</CustomText>
									</View>
									<View style={styles.attendees}>
										<MoodIcon size={65} happiness='#CFEDC0' energy={1} anxiety={anxiety8}/>
										<CustomText style={styles.text}>Andrea</CustomText>
									</View>
								</ScrollView>
							</View>
							<View style={styles.switchContainer}>
								<CustomText style={styles.textNG}>Not Going</CustomText>
								{switchEnabled ? (
									<Switch
										value={toggleEnabled}
										onValueChange={handleToggleEnable}
										trackColor={{ true: '#4CBB17', false: 'red' }}
										ios_backgroundColor="red"
										// Add any additional Switch props as needed
									/>
									) : (
									<TouchableOpacity style={styles.switchBox}
									onPress={handleSwitchToggle}>
										<Image style={styles.switchIcon} source={RSVPSwitch} />
									</TouchableOpacity>
								)}
								<CustomText style={styles.textG}>Going</CustomText>
							</View>
						</View>
					</View>
				</View>

			</BlurView>

		</Modal>

)}

export default ActivityRsvpPopup;