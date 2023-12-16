import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, Switch } from 'react-native';
import styles from './activitiesPageStyles';
import infoIcon from '../assets/infoIcon.png';
import backArrow from '../assets/backArrow.png';
import { useState } from "react";
import plus from '../assets/plus.png';
import ProposalPopup from './proposalPopup';
import Backendless from 'backendless';
import ActivityRsvpPopup from './activityRsvpPopup';
import RSVPSwitch from '../assets/RSVPSwitch.png';

Backendless.initApp('9876ED6D-2CDD-4E20-FFF1-E18BFE7CC800', 'AA654184-A2EF-478D-877D-C1B9B6BE4759');


const ActivitiesPage = () => {

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

	const [myProposals, setMyProposals] = React.useState([<Text key={'noproposals'} style={styles.noActivity}>No Proposals!</Text>])

	const showProposals = () => {
		return myProposals
	}

	const rsvpData = (value) => {
		console.log(value),
		setSwitchMovieEnabled(value)
	}

	const proposedActivity = (activity, date, time, location, notes) => {

		if (activity) {

			const proposalObject = () => {
				return ([
						<View key={date} style={styles.activitiesContainer}>
							<TouchableOpacity style={styles.activityContainer}>
								<View style={styles.activity}>
									<Text style={styles.actTitle}>{activity}</Text>
									<Image
									style={styles.infoIcon}
									source={infoIcon}
									/>
								</View>

								<View style={styles.activityInfo}>
									<Text style={styles.actDate}>{date}, {time.toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric'})}
									</Text>
									<Text style={styles.actName}>Me</Text>
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

			
			if (myProposals.length === 1 && myProposals[0].props.style === styles.noActivity) {
				console.log("YAHHHHH")
				setMyProposals(proposalObject)
			}
			else {
				setMyProposals((prevProposals) => [...prevProposals, proposalObject()]);
			}

			saveToBackend(activity, date, time, location, notes)

			console.log(myProposals)

		}
	}

    return (
        <View style={styles.mainContainer}>
            {/* Activity Page Heading */}
            <View style={styles.headingContainer}>
			
                <Text style={styles.actHeading}>Activities</Text>
                
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
			/>
            
            {/* My Proposals Section */}
            <View style={styles.propsContainer}>
                <Text style={styles.propTitle}>My Proposals</Text>
                {/* My Proposals Activities*/}
                <View style={styles.propActivities}>
                    {/* My Activity 1*/}
                    
					{showProposals()}

                </View>
            </View>

            {/* Group Proposals Section */}
            <View style={styles.propsContainer}>
                <Text style={styles.propTitle}>Groups' Proposals </Text>
                {/* Group Proposals Activities*/}
                <View style={styles.propActivities}>
                    {/* Group 1 Activities*/}
                    <View style={styles.gActivities}>
						<Text style={styles.gNameMovie}>Movie Squad</Text>
                        {/* Group 1 Activity 1*/}
						<View style={styles.activitiesContainer}>
							<TouchableOpacity style={styles.activityContainer} onPress={() => setModalRsvpVisible(true)}>
								<View style={styles.activity}>
									<Text style={styles.actTitle}>Movie Night</Text>
									<Image
									style={styles.infoIcon}
									source={infoIcon}
									/>
								</View>

								<View style={styles.activityInfo}>
									<Text style={styles.actDate}>Tonight, 10:00pm</Text>
									<Text style={styles.actName}>Olivia</Text>
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
									<Text style={styles.actTitle}>Party in EC</Text>
									<Image
									style={styles.infoIcon}
									source={infoIcon}
									/>
								</View>

								<View style={styles.activityInfo}>
									<Text style={styles.actDate}>Tmrw, 10:30pm</Text>
									<Text style={styles.actName}>Andrea</Text>
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

                    <Text style={styles.gName}>Track Team</Text>
                    <View style={styles.gActivities}>
                        <Text style={styles.noActivity}>No Proposals!</Text>
                    </View>

                    <Text style={styles.gName}>The Boys</Text>
                    <View style={styles.gActivities}>
                        <Text style={styles.noActivity}>No Proposals!</Text>
                    </View>
                </View>
                
            </View>
           
            
        </View>

)}

export default ActivitiesPage;