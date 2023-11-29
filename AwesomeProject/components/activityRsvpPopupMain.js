import React, {useState} from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, Modal } from 'react-native';
import styles from './activityRsvpPopupStyles';
import ActivityRsvpPopup from './activityRsvpPopup';


const ActivityRsvpPopupMain = () => {

	const [modalVisible, setModalVisible] = React.useState(false);

	return (
		<View style={styles.modalContainer}>
				<TouchableOpacity style={styles.rsvpActivity}
				onPress={() => setModalVisible(true)}>
					<Text
					>Activity RSVP
					</Text>
				</TouchableOpacity>
				<ActivityRsvpPopup
					visible={modalVisible}
					onClose={() => setModalVisible(false)}
				/>
			</View>

)}

export default ActivityRsvpPopupMain;