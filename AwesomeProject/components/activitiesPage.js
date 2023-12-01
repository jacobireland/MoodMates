import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './activitiesPageStyles';
import plus from '../assets/plus.png';
import infoIcon from '../assets/infoIcon.png';
import backArrow from '../assets/backArrow.png';

const ActivitiesPage = () => {

	return (
		<View style={styles.mainContainer}>
            {/* Activity Page Heading */}
            <View style={styles.activities}>
                <Text style={styles.actHeading}>Activities</Text>
                <Image
                style={styles.backArrow}
                source={backArrow}
                />
                <Image
                style={styles.plus}
                source={plus}
                />
            </View>
            
            {/* My Proposals Section */}
            <View style={styles.myProps}>
                <Text style={styles.myPropTitle}>My Proposals</Text>
                {/* My Proposals Activities*/}
                <View style={styles.myPropActivities}>
                    {/* My Activity 1*/}
                    <TouchableOpacity style={styles.m1_1}>
                            <View style={styles.m1_1activity}>
                                <Text style={styles.m1_1title}>Boardgames</Text>
                                <Image
                                style={styles.infoIcon}
                                source={infoIcon}
                                />
                            </View>
                            <View style={styles.m1_1info}>
                                <Text style={styles.m1_1date}>Tonight, 9pm</Text>
                                <Text style={styles.m1_1name}>Me</Text>
                            </View>
                        </TouchableOpacity>
                </View>
            </View>

            {/* Group Proposals Section */}
            <View style={styles.groupProps}>
                <Text style={styles.groupPropTitle}>Groups' Proposals </Text>
                {/* Group Proposals Activities*/}
                <View style={styles.groupPropActivities}>
                    {/* Group 1 Activities*/}
                    <Text style={styles.g1Name}>Movie Squad</Text>
                    <View style={styles.g1Activities}>
                        {/* Group 1 Activity 1*/}
                        <TouchableOpacity style={styles.g1_1}>
                            <View style={styles.g1_1activity}>
                                <Text style={styles.g1_1title}>Movie Night</Text>
                                <Image
                                style={styles.infoIcon}
                                source={infoIcon}
                                />
                            </View>
                            <View style={styles.g1_1info}>
                                <Text style={styles.g1_1date}>Tonight, 10pm</Text>
                                <Text style={styles.g1_1name}>Olivia</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Group 1 Activity 2*/}
                        <TouchableOpacity style={styles.g1_2}>
                            <View style={styles.g1_2name}>
                                <Text style={styles.g1_2title}>Party in EC</Text>
                                <Image
                                style={styles.infoIcon}
                                source={infoIcon}
                                />
                            </View>
                            <View style={styles.g1_2info}>
                                <Text style={styles.g1_2date}>Tmrw, 10:30pm</Text>
                                <Text style={styles.g1_2name}>Andrea</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.g2Name}>Track Team</Text>
                    <View style={styles.g2Activities}>
                        <Text style={styles.none}>No Proposals!</Text>
                    </View>

                    <Text style={styles.g3Name}>The Boys</Text>
                    <View style={styles.g3Activities}>
                        <Text style={styles.none}>No Proposals!</Text>
                    </View>
                </View>
                
            </View>
           
            
        </View>

)}

export default ActivitiesPage;