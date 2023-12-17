import React, {useState} from 'react';
import { Text, View, Button, ScrollView, Image, TouchableOpacity, Modal, Switch } from 'react-native';
import styles from './myGroupsStyles'
import RSVPSwitch from '../assets/RSVPSwitch.png';
import CustomText from './customText';

Backendless.initApp('9876ED6D-2CDD-4E20-FFF1-E18BFE7CC800', 'AA654184-A2EF-478D-877D-C1B9B6BE4759');


const MyGroups = ({screenChoose}) => {


    return (
        <View style={styles.mainContainer}>
            <View style={styles.myGroupsTitle}>
                <CustomText style={styles.titleText}>My Friend Groups</CustomText>
            </View>

            <View style={styles.myGroups}>
                <TouchableOpacity style={styles.buttonTrack}>
                    <CustomText style={styles.buttonText}>Track Team</CustomText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => screenChoose('MovieSquadGroup')} style={styles.buttonMovie}>
                    <CustomText style={styles.buttonText}>Movie Squad</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBoys}>
                    <CustomText style={styles.buttonText}>The Boys</CustomText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.imageButton}>
                    <Image
                        source={require('../assets/plus.png')} // Replace with your image path
                        style={styles.imageStyle}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default MyGroups;