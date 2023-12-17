import React, {useState} from 'react';
import { Text, View, Button, ScrollView, Image, TouchableOpacity, Modal, Switch } from 'react-native';
import styles from './myGroupsStyles'
import RSVPSwitch from '../assets/RSVPSwitch.png';
import { useTheme } from './themeContext';

Backendless.initApp('9876ED6D-2CDD-4E20-FFF1-E18BFE7CC800', 'AA654184-A2EF-478D-877D-C1B9B6BE4759');


const MyGroups = ({screenChoose}) => {

	const { theme } = useTheme()

    return (
        <View style={styles.mainContainer}>
            <View style={styles.myGroupsTitle}>
                <Text style={[styles.titleText, { color: theme.textColor }]}>My Friend Groups</Text>
            </View>

            <View style={styles.myGroups}>
                <TouchableOpacity style={styles.buttonTrack}>
                    <Text style={styles.buttonText}>Track Team</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => screenChoose('MovieSquadGroup')} style={styles.buttonMovie}>
                    <Text style={styles.buttonText}>Movie Squad</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBoys}>
                    <Text style={styles.buttonText}>The Boys</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.imageButton}>
                    <Image
                        source={require('../assets/addGroup.png')} // Replace with your image path
                        style={styles.imageStyle}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default MyGroups;