import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './activitiesPageStyles';
import infoIcon from '../assets/infoIcon.png';
import backArrow from '../assets/backArrow.png';
import { useState } from "react";
import plus from '../assets/plus.png';
import ProposalPopup from './proposalPopup';
import Backendless from 'backendless';

Backendless.initApp('9876ED6D-2CDD-4E20-FFF1-E18BFE7CC800', 'AA654184-A2EF-478D-877D-C1B9B6BE4759');


const ActivitiesPage = () => {

	const [modalVisible, setModalVisible] = React.useState(false);

	const [myProposals, setMyProposals] = React.useState([<Text style={styles.noActivity}>No Proposals!</Text>])

	const showProposals = () => {
		return myProposals
	}

	const proposedActivity = (activity, date, time, location, notes) => {

		console.log(activity)

		console.log(time)

		if (activity) {

			const proposalObject = () => {
				return (
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
				)
			}

			if (myProposals.length == 1) {
				setMyProposals(proposalObject)
			}
			else {
				setMyProposals((prevProposals) => [...prevProposals, proposalObject()]);
			}

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
                    <Text style={styles.gNameMovie}>Movie Squad</Text>
                    <View style={styles.gActivities}>
                        {/* Group 1 Activity 1*/}
                        <TouchableOpacity style={styles.activityContainer}>
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

                        

                        {/* Group 1 Activity 2*/}
                        {/* My Activity 1*/}
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