import React, {useState} from 'react';
import { Text, View, Button, ScrollView, Image, TouchableOpacity, Modal, Switch } from 'react-native';
import styles from './myGroupsStyles'
const MyGroups = ({screenChoose}) => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.myGroupsTitle}>
                <Text style={styles.titleText}>My Friend Groups</Text>
            </View>

            <View style={styles.myGroups}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Track Team</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => screenChoose('MovieSquadGroup')} style={styles.button}>
                    <Text style={styles.buttonText}>Movie Squad</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
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