import React, {useState} from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, Modal } from 'react-native';
import styles from './proposalPopupStyles';
import ProposalPopup from './proposalPopup';


const ProposalPopupMain = () => {

	const [modalVisible, setModalVisible] = React.useState(false);

	return (
		<View style={styles.modalContainer}>
				<TouchableOpacity style={styles.proposeActivity}
				onPress={() => setModalVisible(true)}>
					<Text
						style={styles.diaryText}
					>Propose Activity
					</Text>
				</TouchableOpacity>
				<ProposalPopup
					visible={modalVisible}
					onClose={() => setModalVisible(false)}
				/>
			</View>

)}

export default ProposalPopupMain;