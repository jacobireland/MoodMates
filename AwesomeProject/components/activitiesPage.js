import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './activitiesPageStyles';
import plus from '../assets/plus.png';
import infoIcon from '../assets/infoIcon.png';
import backArrow from '../assets/backArrow.png';
import { useState } from "react";
import Toggle from "react-native-toggle-element";


const ActivitiesPage = () => {
    

	return (
		<View style={styles.mainContainer}>
            {/* Activity Page Heading */}
            <View style={styles.headingContainer}>
                <Image
                style={styles.backArrow}
                source={backArrow}
                />

                <Text style={styles.actHeading}>Activities</Text>
                
                <Image
                style={styles.plus}
                source={plus}
                />
            </View>
            
            {/* My Proposals Section */}
            <View style={styles.propsContainer}>
                <Text style={styles.propTitle}>My Proposals</Text>
                {/* My Proposals Activities*/}
                <View style={styles.propActivities}>
                    {/* My Activity 1*/}
                    <TouchableOpacity style={styles.activityContainer}>
                        <View style={styles.activity}>
                            <Text style={styles.actTitle}>Boardgames</Text>
                            <Image
                            style={styles.infoIcon}
                            source={infoIcon}
                            />
                        </View>

                        <View style={styles.activityInfo}>
                            <Text style={styles.actDate}>Tonight, 9:00pm</Text>
                            <Text style={styles.actName}>Me</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </View>

            {/* Group Proposals Section */}
            <View style={styles.propsContainer}>
                <Text style={styles.propTitle}>Groups' Proposals </Text>
                {/* Group Proposals Activities*/}
                <View style={styles.propActivities}>
                    {/* Group 1 Activities*/}
                    <Text style={styles.gName}>Movie Squad</Text>
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