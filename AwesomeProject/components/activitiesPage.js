import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, Switch } from 'react-native';
import Styles from './activitiesPageStyles';
import infoIcon from '../assets/infoIcon.png';
import backArrow from '../assets/backArrow.png';
import { useState } from "react";
import plus from '../assets/plus.png';
import ProposalPopup from './proposalPopup';
import Backendless from 'backendless';
import ActivityRsvpPopup from './activityRsvpPopup';
import RSVPSwitch from '../assets/RSVPSwitch.png';
import CustomText from './customText';

Backendless.initApp('9876ED6D-2CDD-4E20-FFF1-E18BFE7CC800', 'AA654184-A2EF-478D-877D-C1B9B6BE4759');


const ActivitiesPage = () => {

	const styles = Styles();

	const [switchMovieEnabled, setSwitchMovieEnabled] = useState(false)	;

	const [toggleMovieEnabled, setToggleMovieEnabled] = useState(true);

	const handleMovieSwitchToggle = () => {
		setSwitchMovieEnabled(!switchMovieEnabled);
	};

	const handleToggleMovieEnable = () => {
		setToggleMovieEnabled(!toggleMovieEnabled)
	}

	const [switchEnabled, setSwitchEnabled] = useState(false)	;

	const [toggleEnabled, setToggleEnabled] = useState(true);

	const handleSwitchToggle = () => {
		setSwitchEnabled(!switchEnabled);
	};

	const handleToggleEnable = () => {
		setToggleEnabled(!toggleEnabled)
	}

	const saveToBackend = async (activity, date, time, location, notes) => {

		try {
			// Assuming you have a 'TextInputData' table in Backendless with a 'text' column
			const dataObject = {
				userActivity: activity,
				userDate: date,
				userTime: time.toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric'}),
				userLocation: location,
				userNotes: notes,
			};
		
			const savedObject = await Backendless.Data.of('ProposedActivities').save(dataObject);
			console.log('Saved to Backendless:', savedObject);
		
		} catch (error) {
			console.error('Error saving to Backendless:', error);
		}
	};

	const [modalVisible, setModalVisible] = React.useState(false);

	const [modalRsvpVisible, setModalRsvpVisible] = React.useState(false);

	const [myProposals, setMyProposals] = React.useState([<CustomText key={'noproposals'} style={styles.noActivity}>No Proposals!</CustomText>])

	const initialProposalsState = React.useState([<CustomText key={'noproposals'} style={styles.noActivity}>No Proposals!</CustomText>])

	const [proposals, setProposals] = React.useState(false)

	const showProposals = () => {
		return myProposals
	}

	const rsvpData = (value) => {
		console.log(value),
		setSwitchMovieEnabled(value)
	}

	const proposedActivity = (activity, date, time, location, notes) => {

		console.log("\n\n proposed activity: ", activity)

		if (activity) {

			const proposalObject = () => {
				return ([
						<View key={date} style={styles.activitiesContainer}>
							<TouchableOpacity style={styles.activityContainer}>
								<View style={styles.activity}>
									<CustomText style={styles.actTitle}>{activity}</CustomText>
									<Image
									style={styles.infoIcon}
									source={infoIcon}
									/>
								</View>

								<View style={styles.activityInfo}>
									<CustomText style={styles.actDate}>{date}, {time.toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric'})}
									</CustomText>
									<CustomText style={styles.actName}>Me</CustomText>
								</View>
							</TouchableOpacity>
							<View style={styles.switchContainer}>
								<Switch
									value={toggleMovieEnabled}
									trackColor={{ true: '#4CBB17', false: 'red' }}
									ios_backgroundColor="red"
								/>
							</View>
						</View>]
				)
			}


			if (!proposals) {
				setMyProposals(proposalObject())
			}
			else {
				setMyProposals((prevProposals) => [...prevProposals, proposalObject()]);
			}

			saveToBackend(activity, date, time, location, notes)
			setProposals(true)

		}
	}

    return (
        <View style={styles.mainContainer}>
            {/* Activity Page Heading */}
            <View style={styles.headingContainer}>
			
                <CustomText style={styles.actHeading}>Activities</CustomText>
                
				<TouchableOpacity onPress={() => setModalVisible(true)}>
					<Image
					style={styles.plus}
					source={plus}
					/>
				</TouchableOpacity>
            </View>

			<ProposalPopup
				visible={modalVisible}
				onClose={() => setModalVisible(false)}
				proposedActivity={proposedActivity}
			/>

			<ActivityRsvpPopup
				visible={modalRsvpVisible}
				onClose={() => setModalRsvpVisible(false)}
				rsvpData={rsvpData}
				activity = 'Movie Night'
				time = '10:00pm'
				date = 'Today'
				location = 'Hogan 2A'
				proposer = 'Olivia'

			/>
            
            {/* My Proposals Section */}
            <View style={styles.propsContainer}>
                <CustomText style={styles.propTitle}>My Proposals</CustomText>
                {/* My Proposals Activities*/}
                <View style={styles.propActivities}>
                    {/* My Activity 1*/}
                    
					{showProposals()}

                </View>
            </View>

            {/* Group Proposals Section */}
            <View style={styles.propsContainer}>
                <CustomText style={styles.propTitle}>Groups' Proposals </CustomText>
                {/* Group Proposals Activities*/}
                <View style={styles.propActivities}>
                    {/* Group 1 Activities*/}
                    <View style={styles.gActivities}>
						<CustomText style={styles.gNameMovie}>Movie Squad</CustomText>
                        {/* Group 1 Activity 1*/}
						<View style={styles.activitiesContainer}>
							<TouchableOpacity style={styles.activityContainer} onPress={() => setModalRsvpVisible(true)}>
								<View style={styles.activity}>
									<CustomText style={styles.actTitle}>Movie Night</CustomText>
									<Image
									style={styles.infoIcon}
									source={infoIcon}
									/>
								</View>

								<View style={styles.activityInfo}>
									<CustomText style={styles.actDate}>Tonight, 10:00pm</CustomText>
									<CustomText style={styles.actName}>Olivia</CustomText>
								</View>
							</TouchableOpacity>
							<View style={styles.switchContainer}>
								{switchMovieEnabled ? (
									<Switch
										value={toggleMovieEnabled}
										onValueChange={handleToggleMovieEnable}
										trackColor={{ true: '#4CBB17', false: 'red' }}
										ios_backgroundColor="red"
										// Add any additional Switch props as needed
									/>
									) : (
									<TouchableOpacity style={styles.switchBox}
									onPress={handleMovieSwitchToggle}>
										<Image style={styles.switchIcon} source={RSVPSwitch} />
									</TouchableOpacity>
								)}
							</View>
						</View>
                        

                        {/* Group 1 Activity 2*/}
                        {/* My Activity 1*/}
						<View style={styles.activitiesContainer}>
							<TouchableOpacity style={styles.activityContainer}>
								<View style={styles.activity}>
									<CustomText style={styles.actTitle}>Party in EC</CustomText>
									<Image
									style={styles.infoIcon}
									source={infoIcon}
									/>
								</View>

								<View style={styles.activityInfo}>
									<CustomText style={styles.actDate}>Tmrw, 10:30pm</CustomText>
									<CustomText style={styles.actName}>Anish</CustomText>
								</View>
							</TouchableOpacity>
							<View style={styles.switchContainer}>
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
							</View>
						</View>
                        
                    </View>

                    <CustomText style={styles.gName}>Track Team</CustomText>
                    <View style={styles.gActivities}>
                        <CustomText style={styles.noActivity }>No Proposals!</CustomText>
                    </View>

                    <CustomText style={styles.gName }>The Boys</CustomText>
                    <View style={styles.gActivities}>
                        <CustomText style={styles.noActivity}>No Proposals!</CustomText>
                    </View>
                </View>
                
            </View>
           
            
        </View>

)}

export default ActivitiesPage;